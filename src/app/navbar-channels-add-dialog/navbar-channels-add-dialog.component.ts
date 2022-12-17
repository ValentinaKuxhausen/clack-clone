import { Component } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { MatDialogRef } from '@angular/material/dialog';
import { Channel } from 'src/models/channel.class';


@Component({
  selector: 'app-navbar-channels-add-dialog',
  templateUrl: './navbar-channels-add-dialog.component.html',
  styleUrls: ['./navbar-channels-add-dialog.component.sass']
})
export class NavbarChannelsAddDialogComponent {

  channel: Channel = new Channel();

  constructor(private firestore: AngularFirestore, public dialogRef: MatDialogRef<NavbarChannelsAddDialogComponent>) { }



  saveChannel() {
    console.log(this.channel)
  }

}
