import { Component, OnInit } from '@angular/core';
import { UserService } from '../../service/user.service';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from '@angular/fire/firestore';
import { Router } from "@angular/router";

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {
  email = '';
  password = '';
  passwordCon = '';
  username = '';
  error = '';
  comp = [];

  constructor(
    private user: UserService,
    private afs: AngularFirestore,
    private router: Router
  ) { }

  ngOnInit() {

  }


  async createUser() {
    await this.afs.collection('people').ref.get().then(data => {
      this.comp = [];
      this.error = '';
      data.docs.forEach(doc => this.comp.push(doc.data()['Username']))
    })
    await this.comp.map(comp => {
      if (comp == this.username) {
        this.error = 'Username is taken';
        this.email = '';
        this.password = '';
        this.passwordCon = '';
        this.username = '';
        return '';
      }

    })
    if (this.password.length > 3 && this.password === this.passwordCon && this.error.length === 0) {
      this.user.signUpwithEmail(this.email, this.password, this.username).then(user => {
        this.router.navigate(['/']);
      })
    }
    else if (this.password.length <= 3) {
      this.error = 'Password is too short'
      this.email = '';
      this.password = '';
      this.passwordCon = '';
      this.username = '';
    }
    else if (this.password !== this.passwordCon) {
      this.error = 'Passwords must match'
      this.email = '';
      this.password = '';
      this.passwordCon = '';
      this.username = '';
    }

  }

}
