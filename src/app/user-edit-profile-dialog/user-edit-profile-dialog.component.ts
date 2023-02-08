import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { MatDialogRef } from '@angular/material/dialog';
import { User } from 'src/models/user.class';

@Component({
  selector: 'app-user-edit-profile-dialog',
  templateUrl: './user-edit-profile-dialog.component.html',
  styleUrls: ['./user-edit-profile-dialog.component.sass']
})
export class UserEditProfileDialogComponent implements OnInit {

  loading = false;
  user!: User;
  userId!: string;

  constructor(
    private firestore: AngularFirestore,
    public dialogRef: MatDialogRef<UserEditProfileDialogComponent>
  ) { }

  ngOnInit(): void {
  }

  saveEditedUser() {
    this.loading = true;
    this.firestore
      .collection('users')
      .doc(this.userId)
      .update(this.user.toJSON())
      .then((result: any) => {
        this.loading = false;
        console.log(this.user);
        this.dialogRef.close();
      })
    }
 
  
}
