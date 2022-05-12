import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from 'src/app/model/User';
import { Post } from '../model/post';
import { PostService } from '../services/post.service';


@Component({
  selector: 'app-edit-post',
  templateUrl: './edit-post.component.html',
  styleUrls: ['./edit-post.component.css']
})
export class EditPostComponent implements OnInit {
  post = new Post(); 
  post2 = new Post(); 

  detailForm :FormGroup;


  //constructor(private token:TokenService, private lc : UserService,private service :ActivatedRoute,private route:Router) { }
  constructor( private lc : PostService,private service :ActivatedRoute,private route:Router) { }
  ngOnInit(): void {
    this.getPost();
  }
  
  onSubmit()
  {
    this.lc.updatePost(this.service.snapshot.params.id, this.post)
      .subscribe(data => {
  //      console.log(data);
         this.post = new Post();
       // console.log(this.detailForm.value.address);

   //     this.gotoList();
      }, error => console.log(error));

  }
 
  getPost()
  {
   
this.lc.getPostById(this.service.snapshot.params.id)
.subscribe(data => {
 // console.log(data);n
  
  this.post = data;
  this.post2= data;


}, error => console.log(error));
  }

 // gotoList() {
 //   this.route.navigate(['/admin/dashboard']);
 // }

}


