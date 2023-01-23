import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { MatDialogRef } from '@angular/material/dialog';
import { User } from 'src/models/user.class';
import { AuthService } from '../shared/services/auth.service';

@Component({
  selector: 'app-user-edit-profile-dialog',
  templateUrl: './user-edit-profile-dialog.component.html',
  styleUrls: ['./user-edit-profile-dialog.component.sass']
})
export class UserEditProfileDialogComponent implements OnInit {

  user!: User;
  loading = false;
  userId!: string;

  constructor(
    public authService: AuthService,
    private firestore: AngularFirestore,
    public dialogRef: MatDialogRef<UserEditProfileDialogComponent>
    )  { }

    ngOnInit(): void {
    }

    // getUser() {
    //   this.firestore
    //     .collection('users')
    //     .doc(this.userId)
    //     .valueChanges()
    //     .subscribe((user: any) => {
    //       this.user = new User(user);
    //     })
    // }

    saveEditedUser() {
      this.loading = true;
  
      this.firestore
      .collection('users')
      .doc(this.userId)
      .update(this.user.toJSON())
      .then((result: any) => {
        this.loading = false;
        this.dialogRef.close();
      })
    }
    
  
}
