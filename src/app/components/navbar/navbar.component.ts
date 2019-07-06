import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { UserService } from '../../service/user.service';
import { Router } from "@angular/router";
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from '@angular/fire/firestore';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  
  show = true;
  photo = '../../../assets/menu_enhanced.svg';
  close = '../../../assets/closeButton.svg';
  logout = false;
  email;
  username;

  constructor(
    private afAuth: AngularFireAuth, 
    private user: UserService,
    private router: Router,
    private afs: AngularFirestore
    ) { }

  ngOnInit() {
    this.afAuth.authState.subscribe(user => {
      
      if(user){
        this.email = user.email;
        this.afs.collection('people').doc(user.uid).ref.get().then( doc => {
          this.username = doc.data()['Username']
        })
        this.logout = true
        console.log(this.username)
      }
      else{
        this.logout = false
      }
    })
  }

  hideFunc(){
    this.show = !this.show;
  }

  logoutFunc(){
    this.user.logout();
    this.router.navigate(['/']);
    this.show = true;
  }
}
