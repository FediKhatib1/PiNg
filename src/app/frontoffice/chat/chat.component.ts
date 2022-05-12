import { Component, OnInit, OnDestroy} from '@angular/core';
import {WebSocketService} from '../../services/web-socket.service';
import {NgForm} from '@angular/forms';
import {ChatMessage} from '../../model/chatMessage';
import {User} from '../../model/user';
import {AuthenticationService} from '../../services/authentication.service';
import {Socket} from 'ngx-socket-io';
import { Router } from '@angular/router';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit, OnDestroy {
  public notifications = 0;
  public loggedInUser: User;
  url: any ;
  msg = "";
  file: any ;
  public message: string = '';
    isEmojiPickerVisible: boolean;
  constructor( private router: Router , public webSocketService: WebSocketService
      , private authenticationService: AuthenticationService ) {}


  ngOnInit(): void {
   this.webSocketService.openWebSocket();
    this.loggedInUser = this.authenticationService.getUserFromLocalStorage();
  }

  ngOnDestroy(): void {
    this.webSocketService.closeWebSocket();
  }

  sendMessage(sendForm: NgForm) {
    const chatMessageDto = new ChatMessage(sendForm.value.user, sendForm.value.message, sendForm.value.file);
    this.webSocketService.sendMessage(chatMessageDto);
    sendForm.controls.message.reset();
    sendForm.controls.file.reset();
  }

  addEmoji(event) {
    this.message = `${this.message}${event.emoji.native}`;
    this.isEmojiPickerVisible = false;
  }


    btnClick() {
      this.router.navigateByUrl('/meet');
    }

  selectFile(event: any) {
    if(!event.target.files[0] || event.target.files[0].length == 0) {
      this.msg = 'You must select an image';
      return;
    }

    var mimeType = event.target.files[0].type;

    if (mimeType.match(/image\/*/) == null) {
      this.msg = "Only images are supported";
      return;
    }

    var reader = new FileReader();
    reader.readAsDataURL(event.target.files[0]);

    reader.onload = (_event) => {
      this.msg = "";
      this.url = reader.result;
    }
  }


}
