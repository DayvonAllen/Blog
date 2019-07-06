import { Component, OnInit } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  email = "";
  constructor(private http: HttpClient, private router: Router) { }

  ngOnInit() {
  }
  send(){
    if(this.email.length > 5){
    this.http.post('http://localhost:3000/postData',{
      "email": this.email
    }).subscribe(data => {
      console.log(data)
    })
    setTimeout(() => {
      this.router.navigate(['/success'])
    }, .900);
  }
  }
}
