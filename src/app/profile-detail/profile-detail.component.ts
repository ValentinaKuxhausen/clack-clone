import { Component } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { MatDialogRef } from '@angular/material/dialog';
import { User } from '../shared/services/user';

@Component({
  selector: 'app-profile-detail',
  templateUrl: './profile-detail.component.html',
  styleUrls: ['./profile-detail.component.sass']
})
export class ProfileDetailComponent {

  user!: User;
  userId!: string;

  constructor(public dialogRef: MatDialogRef<ProfileDetailComponent>, private firestore: AngularFirestore) { }

}
