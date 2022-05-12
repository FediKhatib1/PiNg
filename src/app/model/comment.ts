import { Post } from "./post";
import { User } from "./user";


export class Comment {
    id: number;
    content: string; 
    dateComment: Date; 
    post: Post;
    user: User; 
 
 
 }
 