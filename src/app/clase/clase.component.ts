import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { AuthService } from '../auth.service';
import { Course } from './../classroom.model';

@Component({
  selector: 'app-clase',
  templateUrl: './clase.component.html',
  styleUrls: ['./clase.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ClaseComponent implements OnInit {
  courseId: string;
  course: any;
  constructor(
    public route?: ActivatedRoute,
    private authService?: AuthService
  ) {
    this.courseId = this.route.snapshot.params.courseId;
  }

  ngOnInit(): void {
    if (this.courseId) {
      this.authService.getCourseInfo(this.courseId).then((course) => {
        if (course) {
          this.course = course;
        } else {
          this.course = [];
        }
      });
    }
  }

}
