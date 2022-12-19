import { Component } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { MatDialogRef } from '@angular/material/dialog';
import { Channel } from 'src/models/channel.class';
import {FormControl} from '@angular/forms';
import {Observable} from 'rxjs';
import {map, startWith} from 'rxjs/operators';

export interface State {
  flag: string;
  name: string;
  population: string;
}


@Component({
  selector: 'app-navbar-channels-add-dialog',
  templateUrl: './navbar-channels-add-dialog.component.html',
  styleUrls: ['./navbar-channels-add-dialog.component.sass']
})

export class NavbarChannelsAddDialogComponent {
  stateCtrl = new FormControl('');
  filteredStates: Observable<State[]>;


  channel: Channel = new Channel();

  constructor(private firestore: AngularFirestore, public dialogRef: MatDialogRef<NavbarChannelsAddDialogComponent>) { 
    this.filteredStates = this.stateCtrl.valueChanges.pipe(
      startWith(''),
      map(state => (state ? this._filterStates(state) : this.states.slice())),
    );
  }

  states: State[] = [];

  saveChannel() {
    console.log(this.channel)
  }

  private _filterStates(value: string): State[] {
    const filterValue = value.toLowerCase();

    return this.states.filter(state => state.name.toLowerCase().includes(filterValue));
  }

}
