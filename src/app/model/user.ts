import {Role} from "../enum/role.enum";

export class User {
  userId: string;
  firstName: string;
  lastName: string;
  username: string;
  email: string;
  profileImageUrl: string;
  lastLoginDateDisplay: Date;
  joinDate: Date;
  role: Role; //ROLE_USER, ROLE_ADMIN
  authorities: string[];
  active: boolean;
  notLocked: boolean;
  blockuser: boolean;
}


export class OnlineUserDto {
  public userId: string;
  public sessionId: string;
  public username: string;
  public noOfNewMessages: number;
  public status: string;

  constructor(userId: string, username: string){
    this.userId = userId;
    this.username = username;
    this.sessionId = null;
    this.noOfNewMessages = 0;
    this.status = "OFFLINE";
  }

}

export class Payload{
  public username: string;
  public userId: string;
  public role: string;
  public exp: number;
}

