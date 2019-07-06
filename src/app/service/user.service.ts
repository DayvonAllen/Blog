import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AngularFireAuth } from "@angular/fire/auth";
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from '@angular/fire/firestore';


@Injectable({
  providedIn: 'root'
})
export class UserService {
  private user;
  constructor(private af: AngularFireAuth, private afs: AngularFirestore) { 
    af.authState.subscribe((auth) => {
      this.user = auth;
    });
  }

  get authenticated(): boolean {
    return this.af !== null;
  }

  get currentUser(): any {
    return this.authenticated ? this.user.uid : null;
  }
  
  get currentUserId(): string {
    return this.authenticated ? this.user.uid : '';
  }

  signUpwithEmail(email, password, username){
    return this.af.auth.createUserWithEmailAndPassword(email, password)
    .then(data => {
      return this.afs.collection('people').doc(data.user.uid).set({
        Username: username
      })
    })
    .catch(err =>{
      console.log(err.message);
    })
  }
  logout(){
    return this.af.auth.signOut();
  }
  
  signInWithEmail(email, password){
    return this.af.auth.signInWithEmailAndPassword(email, password)
  }
}
