import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import firebase from 'firebase/app';
import 'firebase/auth';

import { from, Observable, Subscription } from 'rxjs';

import { AuthService } from './../auth.service';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit, OnDestroy {
  user$: Observable<firebase.User>;
  clase$: Observable<any>;
  userSub: Subscription;
  claseSub: Subscription;
  constructor(
    public authService: AuthService,
    public route: ActivatedRoute
  ) {
    this.user$ = this.authService.user$;
    this.clase$ = this.authService.clase$;
  }
  ngOnInit() {
  }
  ngOnDestroy() {

  }
}
