import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Observable } from 'rxjs';

import firebase from 'firebase/app';
import 'firebase/auth';

import { AuthService } from '../auth.service';
import { StudentSubmission } from '../classroom.model';
@Component({
  selector: 'app-entregas',
  templateUrl: './entregas.component.html',
  styleUrls: ['./entregas.component.scss']
})
export class EntregasComponent implements OnInit {
  user$: Observable<firebase.User>;
  courseId: string;
  studentSubmission: StudentSubmission[];
  constructor(
    public route?: ActivatedRoute,
    private authService?: AuthService
  ) {
    this.user$ = this.authService.user$;
    this.authService.getCoursework(this.courseId)
      .then((res: StudentSubmission[]) => {
        return this.studentSubmission = res;
      });
  }

  ngOnInit(): void {
  }

}
