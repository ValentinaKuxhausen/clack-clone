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
  channelsRef = this.firestore.collection('channels');
  channel: Channel = new Channel();
  allChannels = [];
  children;
  themes;
  level: number;
  expandable: boolean;
  hasChild = (_: number, node: ExampleFlatNode) => node.level === 1 && node.expandable;
  channelThemes;



  ngOnInit() {

    this.channelsRef.get().subscribe(snapshot => {
      snapshot.forEach(doc => {
        const channel = new Channel(doc.data());
        const jsonChannel = channel.toJSON();
        const theme = jsonChannel.theme;
        this.children.push({ name: `${theme}`});          
      });
      this.themes = [{ name: 'Channel', children: this.children }];     
      this.dataSource.data = this.themes;
      console.log(this.themes)
    });
  }

  constructor(private firestore: AngularFirestore, public dialog: MatDialog) {
  }


  openChannel() {}


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

  dataSource = new MatTreeFlatDataSource(this.treeControl, this.treeFlattener);




}
