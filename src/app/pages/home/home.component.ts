import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FakeAuthService } from 'src/app/services/fake-auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  logStatus = false;

  constructor(private route:Router, private fakeauth: FakeAuthService) { }

  ngOnInit(): void {
  }
  clickNew(){
   this.route.navigate(['followers',12345],{
   queryParams :{page:12, type:'admin' , var:'exemple'}
     });
  }

  login(){
    this.fakeauth.login();
    this.logStatus = true;
  }

  logout(){
    this.fakeauth.logout();
    this.logStatus = false;
  }

}
