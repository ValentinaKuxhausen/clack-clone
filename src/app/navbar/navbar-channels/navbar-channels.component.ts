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
 
  ngOnInit() {
    this.channelsRef.get().subscribe(snapshot => {
      snapshot.forEach(doc => {
        const channel = new Channel(doc.data());
        const jsonChannel = channel.toJSON();
        this.channel = channel;
        console.log(this.channel)
        const theme = jsonChannel.theme;
        this.tree.push({ name: `${theme}`});    
        
      });
      themes = [{ name: 'Channel', children: this.tree }];     
      this.channelService.dataSource.data = themes;   
    });
  }

  constructor(private firestore: AngularFirestore, public dialog: MatDialog, public channelService: ChannelsService) {
    
  }


}