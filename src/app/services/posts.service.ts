import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from '@angular/fire/firestore';
import { Observable, pipe } from 'rxjs';
import { map } from 'rxjs/operators';
import { Posts } from '../Posts';
@Injectable({
  providedIn: 'root'
})
export class PostsService {
  postsCollection: AngularFirestoreCollection<Posts>
  postsDoc: AngularFirestoreDocument<Posts>
  Posts: Observable<Posts[]>;
  Post

  constructor(private afs: AngularFirestore) { 
    this.postsCollection = this.afs.collection('Blogs');
    this.Posts = this.postsCollection.valueChanges();
  }

  // newComment(comment){
  //   this.postsCollection.add(comment);
  // }

  getPosts(){
    this.Posts = this.postsCollection.snapshotChanges().pipe(
      map(changes => changes.map(a => {
        const data = a.payload.doc.data();
        const id = a.payload.doc.id;
        return { id, ...data}
      }))
    )
    return this.Posts;
  }

  getPost(id){
     this.Post = this.postsCollection.doc(id).ref.get();
     return this.Post
}
}
