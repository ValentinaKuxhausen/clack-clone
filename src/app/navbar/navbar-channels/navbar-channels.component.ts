import { Component } from '@angular/core';
import { Channel } from 'src/models/channel.class';
import { MatDialog } from '@angular/material/dialog';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { FlatTreeControl } from '@angular/cdk/tree';
import { MatTreeFlatDataSource, MatTreeFlattener } from '@angular/material/tree';
import { MatIconModule } from '@angular/material/icon';

interface ChannelsNode {
  name: string;
  children?: ChannelsNode[];
}

interface ExampleFlatNode {
  expandable: boolean;
  name: string;
  level: number;
}

@Component({
  selector: 'app-navbar-channels',
  templateUrl: './navbar-channels.component.html',
  styleUrls: ['./navbar-channels.component.sass']
})

export class NavbarChannelsComponent {
  private _transformer = (node: ChannelsNode, level: number) => {
    return {
      expandable: !!node.children && node.children.length > 0,
      name: node.name,
      level: level,
    };
  };

  ngOnInit() {
    console.log(this.dataSource, this.themes)
    this.channelsRef.get().subscribe(snapshot => {
      snapshot.forEach(doc => {
        const channel = new Channel(doc.data()); // create a new Channel object from the doc data
        const jsonChannel = channel.toJSON();
        const theme = jsonChannel.theme;
        console.log(theme);
        this.themes.push(theme); // add each theme to the array
      });
    });
  }

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

  constructor(private firestore: AngularFirestore, public dialog: MatDialog) {
    this.dataSource.data = this.themes;
    console.log(this.dataSource.data, this.themes);
  }

  channelsRef = this.firestore.collection('channels');
  channel: Channel = new Channel();
  allChannels = [];
  themes = [];
  name: string = 'Channels';
  level: number;
  expandable: boolean;

  dataSource = new MatTreeFlatDataSource(this.treeControl, this.treeFlattener);

  hasChild = (_: number, node: ExampleFlatNode) => node.expandable;


}
