import { Component } from '@angular/core';
import { Channel } from 'src/models/channel.class';
import { MatDialog } from '@angular/material/dialog';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { FlatTreeControl } from '@angular/cdk/tree';
import { MatTreeFlatDataSource, MatTreeFlattener } from '@angular/material/tree';

@Component({
  selector: 'app-navbar-channels',
  templateUrl: './navbar-channels.component.html',
  styleUrls: ['./navbar-channels.component.sass']
})


export class NavbarChannelsComponent {
  constructor(private firestore: AngularFirestore, public dialog: MatDialog, private TreeControl: FlatTreeControl, ) { }


  channelsRef = this.firestore.collection('channels');
  channel: Channel = new Channel();
  allChannels = [];
  themes = [];
  name: string;
  TREE_DATA: Themes[];
  level: number;
  expandable: boolean;
  dataSource;



  
  ngOnInit() {
    this.dataSource.data = this.themes;
    this.channelsRef.get().subscribe(snapshot => {
      snapshot.forEach(doc => {
        const channel = new Channel(doc.data()); // create a new Channel object from the doc data
        const theme = channel.theme;
        this.themes.push(theme); // add each theme to the array
      });
    });
  }
  


}
