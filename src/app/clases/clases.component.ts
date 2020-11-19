import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { faCheckCircle, faTimesCircle } from '@fortawesome/free-regular-svg-icons';
import { faChalkboardTeacher, faUserGraduate } from '@fortawesome/free-solid-svg-icons';

import firebase from 'firebase/app';
import 'firebase/auth';

import { Observable } from 'rxjs';

import { AuthService } from '../auth.service';
import { CourseWork } from '../classroom.model';

@Component({
  selector: 'app-clases',
  templateUrl: './clases.component.html',
  styleUrls: ['./clases.component.scss']
})
export class ClasesComponent implements OnInit {
  user$: Observable<firebase.User>;
  faChalkboardTeacher = faChalkboardTeacher;
  faCheckCircle = faCheckCircle;
  faUserGraduate = faUserGraduate;
  faTimesCircle = faTimesCircle;
  courseId: string;
  courseWork: CourseWork[];
  coursesInfo: any[];

  constructor(
    public route?: ActivatedRoute,
    private authService?: AuthService
  ) {
    this.user$ = this.authService.user$;

  }

  ngOnInit(): void {
    if (this.authService.user$) {
      this.authService.getCoursesInfo(this.route.snapshot.params.id).then(res => {
        return this.coursesInfo = res;

      });
    }
  }
}
