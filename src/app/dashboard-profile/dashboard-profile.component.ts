import { Component } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { User } from 'src/models/user.class';

@Component({
  selector: 'app-dashboard-profile',
  templateUrl: './dashboard-profile.component.html',
  styleUrls: ['./dashboard-profile.component.sass']
})
export class DashboardProfileComponent {

  constructor(private firestore: AngularFirestore) { }
  initial: string;
  user: User = new User();
  userId = '';

  getUser() {
    this.firestore
      .collection('users')
      .doc(this.userId)
      .valueChanges()
      .subscribe((user: any) => {
        this.user = new User(user);
      })
  }

  

  
  // Define the function to get the initial from the email address
  getInitial(email: string) {
    console.log(this.user.email)
    // Split the email address into parts at the '@' symbol
    const parts = email.split('@');
    // Get the first part of the email address, which should be the name
    const name = parts[0];
    // Split the name into individual words
    const words = name.split('.');
    // Get the first word
    let firstWord = words[0];
    // Take the first character of the first word
    let initial = firstWord[0];
    // Check if the first character is a number
    while (initial >= '0' && initial <= '9') {
      // If it is, skip it and move on to the next character
      firstWord = firstWord.slice(1);
      initial = firstWord[0];
    }
    // Store the initial in the variable
    this.initial = initial;
  }
}
