import { Component } from '@angular/core';
import { Channel } from 'src/models/channel.class';
import { MatDialog } from '@angular/material/dialog';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { FlatTreeControl } from '@angular/cdk/tree';
import { MatTreeFlatDataSource, MatTreeFlattener } from '@angular/material/tree';
import { MatIconModule } from '@angular/material/icon';
import { MatTreeModule } from '@angular/material/tree';
import { ChannelsService } from 'src/app/services/channels.service';


@Component({
  selector: 'app-navbar-channels',
  templateUrl: './navbar-channels.component.html',
  styleUrls: ['./navbar-channels.component.sass']
})

export class NavbarChannelsComponent {
 


  /* Only shows the channels names but not the corresponding data. */

  ngOnInit() {
    this.channelService.renderTree();
  }

  constructor(public dialog: MatDialog, public channelService: ChannelsService) {

  }

  openChannel() { console.log('is clicked')}




}