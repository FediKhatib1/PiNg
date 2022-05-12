import { Component, OnInit } from '@angular/core';
import { Post } from 'src/app/model/post';
import { PostService } from 'src/app/services/post.service';

@Component({
  selector: 'app-forumback',
  templateUrl: './forumback.component.html',
  styleUrls: ['./forumback.component.scss']
})
export class ForumbackComponent implements OnInit {
postList : Post[]
  constructor(private postservice:PostService) { }

  ngOnInit(): void {
    this.postservice.getPost2().subscribe(res=>this.postList=res)
  }

}
