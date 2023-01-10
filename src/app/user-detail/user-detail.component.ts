import { Component } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { FormBuilder } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';
import { User } from 'src/models/user.class';
import { AuthService } from '../shared/services/auth.service';
import { UserEditProfileDialogComponent } from '../user-edit-profile-dialog/user-edit-profile-dialog.component';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.sass']
})
export class UserDetailComponent {

  user: User = new User();
  userId = '';
  dialog: any;

  constructor(
    private route: ActivatedRoute, 
    public authService: AuthService,
    private firestore: AngularFirestore,
    public dialogRef: MatDialogRef<UserEditProfileDialogComponent>, 
    private afAuth: AngularFireAuth, 
    private _formBuilder: FormBuilder
    )  { }

  getUser() {
    this.firestore
      .collection('users')
      .doc(this.userId)
      .valueChanges()
      .subscribe((user: any) => {
        this.user = new User(user);
      })
  }

  editProfileDialog() {
    this.dialog.open(UserEditProfileDialogComponent, {
      width: '520px',
      hasBackdrop: true
    });
  }


  
}
