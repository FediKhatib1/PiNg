import { User } from "./user";

export class Event{
    idEvent: number;
    description: string;
    lat:string;
    lng:string
    link:string
    date:Date;
    nbrPart:number
    eventType:any;
    parts:User[]
    
    
}