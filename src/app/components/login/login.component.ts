import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { AngularFireAuth } from '@angular/fire/auth';
import * as firebase from 'firebase/app';
import { Observable } from 'rxjs';
import { UserService } from '../../service/user.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  email = '';
  password = '';
  error = '';
  users;
  auth;

  constructor(
    public user: UserService,
    public afAuth: AngularFireAuth,
    private router: Router
    ) { }

  ngOnInit() {
    this.afAuth.authState.subscribe(user => {
      if(user){
        this.router.navigate(['/'])
      }
    })
  }

  login(){
    this.user.signInWithEmail(this.email, this.password).then(data => {
     this.users = data;
      this.auth = this.user.authenticated;
    }).catch(err => {
      if(err.code === 'auth/wrong-password'){
        this.error = 'Wrong Password';
      }
      else if(err.code === 'auth/user-not-found'){
        this.error = 'Account doesn\'t exist';
      }
      else{
        this.error = err.message;
      }
      console.log(err.code)
    })
  }

  isLoggedIn() {
    if (this.user == null ) {
        return false;
      } else {
        this.logout()
        return true;
      }
    }
  logout() {
      this.afAuth.auth.signOut()
      .then((res) => this.router.navigate(['/']));
    }
    
  }


