import { Component, OnInit } from '@angular/core';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';
import { Posts } from '../../Posts';
import { PostsService } from '../../services/posts.service';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { AngularFireAuth } from "@angular/fire/auth";


@Component({
  selector: 'app-post-details',
  templateUrl: './post-details.component.html',
  styleUrls: ['./post-details.component.css']
})
export class PostDetailsComponent implements OnInit {
  posts: Posts[];
  id;
  post;
  canPost = false;
  commentPost = '';
  username;
  comments = []
  today;
  date;

  constructor(
    private postService: PostsService,
    private router: Router,
    private route: ActivatedRoute,
    private afs: AngularFirestore,
    private afAuth: AngularFireAuth,
  ) { }

  async ngOnInit() {
    this.afAuth.authState.subscribe(user => {
      if(user){
        this.canPost = true;
        this.afs.collection('people').doc(user.uid).ref.get().then( doc => {
          this.username = doc.data()['Username']
        })
      }
      else{
        this.canPost = false;
      }
    })
    this.id = this.route.snapshot.params['id'];
    this.postService.getPost(this.id).then(doc => {
      this.post = doc.data();
      console.log(this.post);
    })
    await this.afs.collection('comments').ref.where('id', '==', this.id).get().then(data => {
      data.docs.forEach(doc => {
        this.comments.push(doc.data())
      })
      
    })
    this.comments.sort(function(a, b) {
      return  b.timestamp - a.timestamp;
    });
    console.log(this.comments)
  }
  
  async comment(){
    if(this.canPost === true){
      this.today = new Date();
      if(this.commentPost.length === 0){
        this.commentPost = 'Nothing';
      }
      await this.afs.collection('comments').add({
        comment: this.commentPost,
        author: this.username,
        id: this.id,
        timestamp: Date.now(),
        date: (new Date().getMonth() + 1) + '-' + new Date().getDate() + '-' + new Date().getFullYear()
      })
      window.location.reload()
    }
    else {
      this.router.navigate(['/login'])
    }
  }

  onScroll() {
    console.log('scrolled!!');
  }
}