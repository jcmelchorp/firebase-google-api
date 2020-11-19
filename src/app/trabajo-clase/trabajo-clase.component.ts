import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../auth.service';
import { CourseWork } from '../classroom.model';
import firebase from 'firebase/app';
import 'firebase/auth';
@Component({
  selector: 'app-trabajo-clase',
  templateUrl: './trabajo-clase.component.html',
  styleUrls: ['./trabajo-clase.component.scss']
})
export class TrabajoClaseComponent implements OnInit {
  user$: Observable<firebase.User>;
  courseId: string;
  courseWork: CourseWork[];
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

  }
}
