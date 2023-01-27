import { FlatTreeControl } from '@angular/cdk/tree';
import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatTreeFlatDataSource, MatTreeFlattener } from '@angular/material/tree';
import { NavbarChannelsAddDialogComponent } from '../navbar-channels-add-dialog/navbar-channels-add-dialog.component';
import { NavbarMessagesAddDialogComponent } from '../navbar-messages-add-dialog/navbar-messages-add-dialog.component';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Channel } from 'src/models/channel.class';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.sass']
})
export class NavbarComponent {
  channelId = '';

  constructor(private dialog: MatDialog, private firestore: AngularFirestore) { }

  newChannel() {
    this.dialog.open(NavbarChannelsAddDialogComponent, {
      width: '520px', 
      hasBackdrop: true
    });
  }

  newMessage() {
    this.dialog.open(NavbarMessagesAddDialogComponent, {
      width: '520px',
      
      hasBackdrop: true
    });
  }
}
