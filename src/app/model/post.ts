import { User } from "./user";

export class Post {
   id: number;
   content: string; 
   seenNmbr: number; 
   signaler: number; 
   datePost: Date; 
   user: User;
   like: number; 
   dislike: number;


}
