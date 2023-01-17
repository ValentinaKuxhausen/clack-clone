import { FlatTreeControl } from '@angular/cdk/tree';
import { Injectable } from '@angular/core';
import { MatTreeFlatDataSource, MatTreeFlattener } from '@angular/material/tree';

interface ChannelsNode {
  name: string;
  children?: ChannelsNode[];
}

interface ExampleFlatNode {
  expandable: boolean;
  name: string;
  level: number;
}

@Injectable({
  providedIn: 'root'
})

export class ChannelsService {

  constructor() { }

  private _transformer = (node: ChannelsNode, level: number) => {
    return {
      expandable: !!node.children && node.children.length > 0,
      name: node.name,
      level: level,
    };
  };

  treeControl = new FlatTreeControl<ExampleFlatNode>(
    node => node.level,
    node => node.expandable,
  );

  treeFlattener = new MatTreeFlattener(
    this._transformer,
    node => node.level,
    node => node.expandable,
    node => node.children,
  );

  openChannel() {}

  hasChild = (_: number, node: ExampleFlatNode) => node.expandable;

  public dataSource = new MatTreeFlatDataSource(this.treeControl, this.treeFlattener);

}
