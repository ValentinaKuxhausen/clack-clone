import { Component } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { MatDialogRef } from '@angular/material/dialog';
import { Channel } from 'src/models/channels.class';
import {FormControl} from '@angular/forms';
import {Observable} from 'rxjs';
import {map, startWith} from 'rxjs/operators';


@Component({
  selector: 'app-navbar-channels-add-dialog',
  templateUrl: './navbar-channels-add-dialog.component.html',
  styleUrls: ['./navbar-channels-add-dialog.component.sass']
})

export class NavbarChannelsAddDialogComponent {
  
  channel: Channel = new Channel();
  stateCtrl = new FormControl('');
  filteredChannels: Observable<Channel[]>;
  filter: any;

  constructor(private firestore: AngularFirestore, public dialogRef: MatDialogRef<NavbarChannelsAddDialogComponent>) { 
    this.filteredChannels = this.stateCtrl.valueChanges.pipe(
      startWith(''),
      map(channel => (channel ? this._filterStates(channel) : this.channel.slice())),
    );
  }

  saveChannel() {
    console.log(this.channel)
  }

  private _filterStates(value: string): Channel[] {
    const filterValue = value.toLowerCase();
    return this.filter(channel => channel.theme.toLowerCase().includes(filterValue));
  }

}


/* */