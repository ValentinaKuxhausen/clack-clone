import { Component } from '@angular/core';
import { Channel } from 'src/models/channel.class';
import { MatDialog } from '@angular/material/dialog';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { FlatTreeControl } from '@angular/cdk/tree';
import { MatTreeFlatDataSource, MatTreeFlattener } from '@angular/material/tree';
import { MatIconModule } from '@angular/material/icon';
import {MatTreeModule} from '@angular/material/tree'; 
import { ChannelsService } from 'src/app/services/channels.service';


interface ChannelsNode {
  name: string;
  isClosedArea: boolean;
  children?: ChannelsNode[];
}

let themes;



@Component({
  selector: 'app-navbar-channels',
  templateUrl: './navbar-channels.component.html',
  styleUrls: ['./navbar-channels.component.sass']
})

export class NavbarChannelsComponent {
  channelsRef = this.firestore.collection('channels');
  channel: Channel = new Channel();
  tree: ChannelsNode[] = [];
  allChannels;


  /* Only shows the channels names but not the corresponding data. */

  ngOnInit() {
    this.channelsRef.get().subscribe(snapshot => {
      snapshot.forEach(doc => {
        const channel = new Channel(doc.data());
        this.tree.push({ name: `${channel.theme}`, isClosedArea: channel.isClosedArea });            
      });
      themes = [{ name: 'Channel', children: this.tree }];    
    
      this.channelService.dataSource.data = themes;  
      console.log(themes, this.channelService.dataSource.data); 
      
    });
    this.getAllChannels(); 
  }

  constructor(private firestore: AngularFirestore, public dialog: MatDialog, public channelService: ChannelsService) {
    
  }

  getAllChannels() {this.firestore
    .collection('channels')
    .valueChanges()
    .subscribe((changes: any) => {
      console.log('Received changes', changes);
      this.allChannels = changes;      
    })}

  openChannel() {}


}