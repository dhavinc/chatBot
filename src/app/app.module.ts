import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { EmptyComponent } from './empty/empty.component';
import { ChatService } from './chat.service';
import { ChatWindowComponent } from './chat-window/chat-window.component';
import { HttpModule } from '@angular/http';
import { MainComponent } from './main/main.component';
import { ChatsComponent } from './chats/chats.component';

@NgModule({
  declarations: [
    AppComponent,
    EmptyComponent,
    ChatWindowComponent,
    MainComponent,
    ChatsComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpModule
  ],
  providers: [
    ChatService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
