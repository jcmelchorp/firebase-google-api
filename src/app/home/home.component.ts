import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

import firebase from 'firebase/app';
import 'firebase/auth';

import { AuthService } from './../auth.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  redirect = false;
  user: firebase.User;
  constructor(
    private router: Router,
    private authService: AuthService
  ) { }

  ngOnInit(): void {
  }
  onLogin() {
    this.authService.login().then(async user => {
      await this.router.navigateByUrl('/user/' + user.user.providerData[0].uid);
      return user;
    });

  }
}
