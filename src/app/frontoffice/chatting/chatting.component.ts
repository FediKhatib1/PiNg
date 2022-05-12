import {Component, Input, OnInit} from '@angular/core';
import {OnlineUserDto} from '../../model/user';
import {Message} from '../../model/Message';

@Component({
  selector: 'app-chatting',
  templateUrl: './chatting.component.html',
  styleUrls: ['./chatting.component.css'],
  providers: [ ChattingComponent , Input , Component  ]
})
export class ChattingComponent implements OnInit {
  @Input()selectedUser: OnlineUserDto;
  @Input()sentMessage: Message;

  public isCloseChatBox: boolean;
  public messages: Message[] = [];

  constructor() { }

  ngOnInit(): void {
    this.isCloseChatBox = true;
  }




  handleSelectedUser(event): void{
    this.isCloseChatBox = false;
    this.selectedUser = event;
  }

  handleMessages(event): void{
    this.messages = event;
  }

  handleSentMessage(event): void{
    this.sentMessage = event;
  }

  handleCloseChatBox(event): void{
    this.isCloseChatBox = event;
  }

}
