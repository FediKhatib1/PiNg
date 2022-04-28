import { Injectable } from '@angular/core';
import { ChatMsg } from '../model/chatMsg';
import {HttpInterceptor} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class WebSocketService {

  // @ts-ignore
  webSocket: WebSocket ;
  chatMessages: ChatMsg[] = [];

  constructor() { }

  public openWebSocket(){
    this.webSocket = new WebSocket('ws://localhost:8087/chat');

    this.webSocket.onopen = (event) => {
      console.log('Open: ', event);
    };

    this.webSocket.onmessage = (event) => {
      const chatMessageDto = JSON.parse(event.data);
      this.chatMessages.push(chatMessageDto);
    };

    this.webSocket.onclose = (event) => {
      console.log('Close: ', event);
    };
  }

  public sendMessage(chatMessageDto: ChatMsg){
    this.webSocket.send(JSON.stringify(chatMessageDto));
  }

  public closeWebSocket() {
    this.webSocket.close();
  }

}
