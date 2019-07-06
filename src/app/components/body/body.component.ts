import { Component, OnInit } from '@angular/core';
import { PostsService } from '../../services/posts.service';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})
export class BodyComponent implements OnInit {
  posts;
  constructor(private postService: PostsService) { }

  ngOnInit() {
    this.postService.getPosts().subscribe(data => {
      this.posts = data;
      console.log(data)
    })
  }

}
