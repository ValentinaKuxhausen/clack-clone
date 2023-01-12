import { Component } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { MatDialog } from '@angular/material/dialog';
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

  constructor(
    public authService: AuthService,
    private firestore: AngularFirestore,
    public dialog: MatDialog 
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
