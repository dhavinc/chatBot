import { Injectable } from '@angular/core';
import { environment } from '../environments/environment';
import { Http, Headers } from '@angular/http';
// tslint:disable-next-line:import-blacklist
// import 'rxjs/Rx';
import { map } from 'rxjs/operators';
import { Message } from './shared/message.model';
import { Subject } from 'rxjs';
// @Injectable({
//   providedIn: 'root'
// })
@Injectable()
export class ChatService {
  private messages: Message[] = [
    new Message('bot', 'hey my bitch')
  ];
  messagesHasBeenUpdated = new Subject<Message[]>();
  readonly token = environment.dialogflow.demo;
  readonly url = 'https://api.dialogflow.com/v1/query?v=20150910';
  constructor(private http: Http) { }
  // talk() {
  //   this.client.textRequest('Who are you')
  //     .then((res) => {
  //       console.log(res);
  //     });
  // }
  getResponse(query: string) {
    const data = {
      query : query,
      lang: 'en',
      sessionId: '12345'
    };
    return this.http
      .post(`${this.url}`, data, {headers: this.getHeaders()})
      .pipe(
        map(res => {
          return res.json();
        })
      );
  }

  addMessage(message: Message) {
    this.messages.push(message);
    console.log(this.messages);
    this.messagesHasBeenUpdated.next(this.messages.slice());
  }
  getMessages() {
    return this.messages.slice();
  }

  getHeaders() {
    const headers = new Headers();
    headers.append('Authorization', `Bearer ${this.token}`);
    return headers;
  }
}
