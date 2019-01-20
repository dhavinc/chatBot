import { Component, OnInit, ViewChild, ElementRef, AfterViewChecked } from '@angular/core';
import { ChatService } from '../chat.service';
import { Message } from '../shared/message.model';

@Component({
  selector: 'app-chats',
  templateUrl: './chats.component.html',
  styleUrls: ['./chats.component.css']
})
export class ChatsComponent implements OnInit, AfterViewChecked {
  @ViewChild('chat') refChat: ElementRef;
  messages: Message[];
  constructor(private chatService: ChatService) { }

  ngOnInit() {
    this.chatService.messagesHasBeenUpdated.subscribe(
      (messages: Message[]) => {
        this.messages = messages;
        this.scrollToBottom();
      }
    );
    this.messages = this.chatService.getMessages();
  }
  ngAfterViewChecked() {
    this.scrollToBottom();
  }
  scrollToBottom(): void {
    try {
        this.refChat.nativeElement.scrollTop = this.refChat.nativeElement.scrollHeight;
    } catch (err) { }
}

}
