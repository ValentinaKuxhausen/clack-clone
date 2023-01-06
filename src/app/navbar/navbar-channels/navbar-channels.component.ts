import { Component } from '@angular/core';
import { Channel } from 'src/models/channel.class';
import { MatDialog } from '@angular/material/dialog';
import { AngularFirestore } from '@angular/fire/compat/firestore';

@Component({
  selector: 'app-navbar-channels',
  templateUrl: './navbar-channels.component.html',
  styleUrls: ['./navbar-channels.component.sass']
})
export class NavbarChannelsComponent {

  constructor(private firestore: AngularFirestore, public dialog: MatDialog) { }

  channel: Channel = new Channel();
  allChannels = [];

}
