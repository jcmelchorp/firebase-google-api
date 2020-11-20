import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';

import { Observable } from 'rxjs';

import firebase from 'firebase/app';
import 'firebase/auth';

import { AuthService } from '../auth.service';
import { CourseWork } from '../classroom.model';
@Component({
  selector: 'app-trabajo-clase',
  templateUrl: './trabajo-clase.component.html',
  styleUrls: ['./trabajo-clase.component.scss']
})
export class TrabajoClaseComponent implements OnInit {
  user$: Observable<firebase.User>;
  courseId: string;
  userId: string;
  courseWork: CourseWork[];
  faChevronLeft = faChevronLeft;
  constructor(
    public route?: ActivatedRoute,
    private authService?: AuthService
  ) {
    this.user$ = this.authService.user$;
    this.courseId = this.route.snapshot.params.courseId;
    this.authService.getCoursework(this.courseId)
      .then((res: CourseWork[]) => {
        return this.courseWork = res;
      });
  }
  ngOnInit() {
    this.user$.subscribe(user => {
      return this.userId = user.providerData[0].uid;
    }).unsubscribe();
  }
  ngOnDestroy(): void {
    //Called once, before the instance is destroyed.
    //Add 'implements OnDestroy' to the class.

  }
}
