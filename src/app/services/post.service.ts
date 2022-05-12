import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PostService {
  private url = 'http://localhost:8080/posts/addPost';
  private url1 = 'http://localhost:8080/forum/addComment';
  private url2 = 'http://localhost:8080/posts/postlist';
  private url3 = 'http://localhost:8080/posts/';
  private url4 = 'http://localhost:8080/posts/updatePost/';
  private url10 = 'http://localhost:8080/posts/like/';


  private url5 = 'http://localhost:8080/forum/';
  private url6 = 'http://localhost:8080/forum/addComment';
  private url7 = 'http://localhost:8080/forum/comments';
  private url8 = 'http://localhost:8080/forum/dComment/';
  private url9 = 'http://localhost:8080/forum/updatePost/';

  constructor(private http: HttpClient) { }

  createPost(post: Object): Observable<Object> {
    return this.http.post(`${this.url}`, post);
  }

  createComment(comment: Object): Observable<Object> {
    return this.http.post(`${this.url6}`, comment);
  }

  getPost(page: number): Observable<any> {
    return this.http.get(`${this.url2}`+ '?page=' + page);
  }
  getPost2(): Observable<any> {
    return this.http.get('http://localhost:8080/posts/postlist');
  }
  
  
  delete(id: number): Observable<any> {
    return this.http.delete(`${this.url3}${id}`, { responseType: 'text' });
  } 
  
  updatePost(id: number, value: any): Observable<Object> {
    return this.http.put(`${this.url4}${id}`, value);
  }

  getPostById(id: number): Observable<any> {
    return this.http.get(`${this.url3}${id}`);
  } 

  addLike(id: number, value: any): Observable<Object> {
    return this.http.put(`${this.url10}${id}`, value);
  }
  
  
  getComment(): Observable<any> {
    return this.http.get(`${this.url7}`);
  }
  
  deleteComment(id: number): Observable<any> {
    return this.http.delete(`${this.url8}${id}`, { responseType: 'text' });
  } 
  
  updateComment(id: number, value: any): Observable<Object> {
    return this.http.put(`${this.url4}${id}`, value);
  }

  getCommentById(id: number): Observable<any> {
    return this.http.get(`${this.url3}${id}`);
  } 
}
