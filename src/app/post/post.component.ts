import { Component, Input, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Comment } from 'src/app/model/comment';
import { Post } from 'src/app/model/post';
import { User } from 'src/app/model/user';
import { PostService } from 'src/app/services/post.service';
import { AuthenticationService } from 'src/app/services/authentication.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {
  post = new Post();
  us =new User();
  
  constructor(private lc : PostService,private tokenStorage:AuthenticationService, private router: Router,private service :ActivatedRoute) { }

  ngOnInit(): void {
  }

  
//  usReturn()
//  {
//this.us.userId=this.tokenStorage.getUserFromLocalStorage().userId;
//this.us.email=this.tokenStorage.getUserFromLocalStorage().email;
//this.us.username=this.tokenStorage.getUserFromLocalStorage().username;
//return this.us;
//  }

  ajouter()
  {
//    this.post.user=this.usReturn();
    this.lc.createPost(this.post).subscribe(
      data=>{
        console.log(data);
  
        this.post=new Post();
        this.router.navigate(['landing']);

      },    error => console.log(error));

  }

  showModal = false;
  toggleModal(){
    this.showModal = !this.showModal;
  }

}
