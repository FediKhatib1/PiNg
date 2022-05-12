import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Post } from '../model/post';
import { PostService } from '../services/post.service';

@Component({
  selector: 'app-afficher-post',
  templateUrl: './afficher-post.component.html',
  styleUrls: ['./afficher-post.component.css']
})
export class AfficherPostComponent implements OnInit {
  listsPost : Post[];
  listPost : Observable<Post[]>;
  username: String;
  post = new Post(); 
  p: number = 1;
  total: number = 0;

  constructor(private lc : PostService,private service :ActivatedRoute,private route:Router) {}

  ngOnInit(): void {
    this.afficherPost()
  }
  afficher()
  {
    this.listPost=this.lc.getPost(this.p);
   // console.log(this.tokenStorage.getInstall().id);
  }
  afficherPost()
{
  this.lc.getPost(this.p).subscribe(data => {

console.log(data) ;
this.listsPost=data;
this.total = data.total;

  }, error => console.log(error));

}

pageChangeEvent(event: number){
  this.p = event;
  this.afficherPost();
}

clickMethod(id: number): void {
  if(confirm("Are you sure to delete this user ? "+name)) {

  this.lc.delete(id)
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
    this.lc.addLike(this.service.snapshot.params.id, this.post.like)
      .subscribe(data => {
  //      console.log(data);
         this.post = new Post();
       // console.log(this.detailForm.value.address);

      //  this.gotoList();
      }, error => console.log(error));

  }

}
