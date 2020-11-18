import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { faCheckCircle, faTimesCircle } from '@fortawesome/free-regular-svg-icons';
import { faChalkboardTeacher, faUserGraduate } from '@fortawesome/free-solid-svg-icons';

import firebase from 'firebase/app';
import 'firebase/auth';

import { from, Observable, Subscription } from 'rxjs';

import { AuthService } from './../auth.service';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  user$: Observable<firebase.User>;
  coursesInfo: any[];
  userSub: Subscription;
  faChalkboardTeacher = faChalkboardTeacher;
  faCheckCircle = faCheckCircle;
  faUserGraduate = faUserGraduate;
  faTimesCircle = faTimesCircle;
  constructor(
    public authService: AuthService,
    public route: ActivatedRoute
  ) {
    this.user$ = this.authService.user$;

  }
  ngOnInit() {

    this.authService.getCoursesInfo(this.route.snapshot.params.id, 'STUDENT').then(res => {
      return this.coursesInfo = res;

    });
    //this.loadStudentCourses()
  }
}
