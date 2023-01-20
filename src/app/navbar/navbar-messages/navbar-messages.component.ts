import { Component } from '@angular/core';
import { Message } from 'src/models/message.class';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { MatDialog } from '@angular/material/dialog';
import { MessagesService } from 'src/app/services/messages.service';


interface MessagesNode {
  name: string;
  children?: MessagesNode[];
}

let themes;


@Component({
  selector: 'app-navbar-messages',
  templateUrl: './navbar-messages.component.html',
  styleUrls: ['./navbar-messages.component.sass']
})

export class NavbarMessagesComponent {

  messagesRef = this.firestore.collection('messages');
  message: Message = new Message();
  tree: MessagesNode[] = [];
  allMessages;

   ngOnInit() {
     this.messagesRef.get().subscribe(snapshot => {
       snapshot.forEach(doc => {
         const message = new Message(doc.data());
         this.tree.push({ name: `${message.firstName}`});            
       });
       themes = [{ name: 'Message', children: this.tree }];    
       this.messageService.dataSource.data = themes;  
       console.log(themes, this.messageService.dataSource.data);   
     });
     this.getAllMessages(); 
   }

  constructor(private firestore: AngularFirestore, public dialog: MatDialog, public messageService: MessagesService) {
    
  }

  getAllMessages() {this.firestore
    .collection('messages')
    .valueChanges()
    .subscribe((changes: any) => {
      console.log('Received changes', changes);
      this.allMessages = changes;      
    })}

  openMessage() {}


}
