import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { map, tap } from 'rxjs';
import { ChannelsService } from 'src/app/services/channels.service';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Channel } from 'src/models/channel.class';
import { AngularFireAuth } from '@angular/fire/compat/auth';

@Component({
  selector: 'app-dashboard-channel-add-message',
  templateUrl: './dashboard-channel-add-message.component.html',
  styleUrls: ['./dashboard-channel-add-message.component.sass']
})
export class DashboardChannelAddMessageComponent implements OnInit {

  constructor(private route: ActivatedRoute, public channelService: ChannelsService, private firestore: AngularFirestore, private afAuth: AngularFireAuth,) { }
  textareaFocused = false;
  channelId = '';
  channel: Channel = new Channel();
  placeholderText: string;

  ngOnInit() {
    this.route.paramMap.subscribe(paramMap => {
      this.channelId = paramMap.get('channelId');
      this.getChannel();

    })
  }

  getChannel() {
    this.firestore
      .collection('channels')
      .doc(this.channelId)
      .valueChanges()
      .subscribe((channel: any) => {
        this.channel = new Channel(channel);
      })
  }


  getCurrentUser() {

    this.afAuth.authState.subscribe(currentUser => {
      debugger
      if (currentUser) {
        console.log(currentUser)
        this.firestore
          .collection('users')
          .get()
          .subscribe(snapshot => {
            // Get all the users data from Firestore
            const users: any = snapshot.docs.map(doc => doc.data());

            // Find the current user's data in the users array
            const currentUserData = users.find(user => user.userId === currentUser.uid);
           
            // Do something with the current user's data
             for (const property in currentUserData) {
            
             console.log(property + ': ' + currentUserData[property]);
            }
          });
      }
    });
  }


  sendMessage() {
    this.afAuth.authState.subscribe(currentUser => {
      if (currentUser) {

        console.log(currentUser)
      }
    });
  }
}






