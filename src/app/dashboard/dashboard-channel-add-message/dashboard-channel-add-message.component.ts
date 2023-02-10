import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { map, tap } from 'rxjs';
import { ChannelsService } from 'src/app/services/channels.service';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Channel } from 'src/models/channel.class';


@Component({
  selector: 'app-dashboard-channel-add-message',
  templateUrl: './dashboard-channel-add-message.component.html',
  styleUrls: ['./dashboard-channel-add-message.component.sass']
})
export class DashboardChannelAddMessageComponent implements OnInit {

  constructor(private route: ActivatedRoute, public channelService: ChannelsService, private firestore: AngularFirestore) { }
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
}





