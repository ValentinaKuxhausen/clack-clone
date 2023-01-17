import { Component } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { MatDialogRef } from '@angular/material/dialog';
import { Channel } from 'src/models/channel.class';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { onAuthStateChanged, getAuth } from 'firebase/auth';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-navbar-channels-add-dialog',
  templateUrl: './navbar-channels-add-dialog.component.html',
  styleUrls: ['./navbar-channels-add-dialog.component.sass']
})

export class NavbarChannelsAddDialogComponent {
  loading = false;
  channel: Channel = new Channel();
  allChannels = [];
  channelCtrl = new FormControl('');
  filteredChannels: Observable<Channel[]>;
  filter: any;
  channelName: string;
  users: any[];
  newChannel: Channel;
  channelDiscription: string;
  usersId: string;
  isChecked = false;
  formGroup = this._formBuilder.group({
    enableWifi: '',
    acceptTerms: ['', Validators.requiredTrue],
  });

  constructor(private firestore: AngularFirestore, public dialogRef: MatDialogRef<NavbarChannelsAddDialogComponent>, private afAuth: AngularFireAuth, private _formBuilder: FormBuilder) {
  }


  addNewChannel() {
    this.afAuth.authState.subscribe(currentUser => {
      if (currentUser) {
        this.firestore
          .collection('users')
          .get()
          .subscribe(snapshot => {
            onAuthStateChanged(getAuth(), (authUser) => {
              this.usersId = authUser.uid;
            });
            this.users = snapshot.docs.map(doc => doc.data());
            this.newChannel = new Channel({
              creatorId: currentUser.uid,
              usersData: this.users,
              theme: this.channelName,
              discription: this.channelDiscription,
              isClosedArea: this.isChecked
            });
            this.firestore
              .collection('channels')
              .add(this.newChannel.toJSON())
              .then((result: any) => {
                console.log('Adding channel finished', result);
              });
          });
      }
    });
    this.dialogRef.close();
  }


  /*   saveChannel() {
      this.loading = true;
      this.firestore
        .collection('channels')
        .add(this.channel.toJSON())
        .then((result: any) => {
          console.log('Adding user finished', result);
        });
      this.loading = false;
      this.dialogRef.close();
    } */
}


