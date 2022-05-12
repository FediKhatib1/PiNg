export class ChatMessage {
    user: string;
    message: string;
    file: any ;

    constructor(user: string, message: string , file: any) {
        this.user = user;
        this.message = message;
        this.file = file ;
    }
}
