import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

import { ChatService } from '../chat.service';
import { Message } from '../shared/message.model';

@Component({
  selector: 'app-chat-window',
  templateUrl: './chat-window.component.html',
  styleUrls: ['./chat-window.component.css']
})
export class ChatWindowComponent implements OnInit {
  chatForm: FormGroup ;
  msgText: string;
  constructor(private chatService: ChatService) { }

  ngOnInit() {
    this.chatForm = new FormGroup({
      'msgText': new FormControl(null)
    });
  }
  onSend() {
    // console.log(this.chatForm.get('msgText').value);
    let msgBot: Message;
    this.msgText = this.chatForm.get('msgText').value;
    const msgUser =  new Message('user', this.msgText);
    this.chatService.getResponse(this.msgText).subscribe(
      (data) => {
        // console.log(data.result.fulfillment.speech);
        msgBot = new Message('bot', data.result.fulfillment.speech);
        this.chatService.addMessage(msgBot);
      }
    );
    this.chatService.addMessage(msgUser);
    this.chatForm.reset();
  }

}
