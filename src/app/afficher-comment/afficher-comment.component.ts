import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Post } from '../model/post';
import { PostService } from '../services/post.service';

@Component({
  selector: 'app-afficher-comment',
  templateUrl: './afficher-comment.component.html',
  styleUrls: ['./afficher-comment.component.css'],
})
export class AfficherCommentComponent implements OnInit {
  listsComment : Comment[];
  listComment : Observable<Comment[]>;
  username: String;
  comment = new Comment(); 
  
  constructor(private lc : PostService,private service :ActivatedRoute,private route:Router) {}

  ngOnInit(): void {
    this.afficherComment()
  }
  afficher()
  {
    this.listComment=this.lc.getComment();
   // console.log(this.tokenStorage.getInstall().id);
  }
  afficherComment()
{
  this.lc.getComment().subscribe(data => {

console.log(data) ;
this.listsComment=data;
  }, error => console.log(error));
}

clickMethod(id: number): void {
  if(confirm("Are you sure to delete this comment ? "+name)) {

  this.lc.deleteComment(id)
    .subscribe(
      data => {
        console.log(data);
       // this.reloadData();
      location.reload();
      },
      error => console.log(error));
    }
    }

    onSubmit()
  {
    this.lc.addLike(this.service.snapshot.params.id, this.comment)
      .subscribe(data => {
  //      console.log(data);
         this.comment = new Comment();
       // console.log(this.detailForm.value.address);

      //  this.gotoList();
      }, error => console.log(error));

  }
}
