import { Component, OnInit } from '@angular/core';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';
import { Posts } from '../../Posts';
import { PostsService } from '../../services/posts.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {
  posts = [];

  constructor(private postService: PostsService) { }

  ngOnInit() {
    this.postService.getPosts().subscribe(data => {
      this.posts = data;
      console.log(data)
    })
  }

}
