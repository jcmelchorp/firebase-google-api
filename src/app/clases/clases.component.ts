import { Component, Input, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

import { faCheckCircle, faTimesCircle } from '@fortawesome/free-regular-svg-icons';
import { faChalkboardTeacher, faUserGraduate } from '@fortawesome/free-solid-svg-icons';

import firebase from 'firebase/app';
import 'firebase/auth';

import { combineLatest, from, Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';

import { AuthService } from '../auth.service';
import { CourseWork } from '../classroom.model';
import { SnackService } from './../snack.service';

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
  filter: FormControl;
  filter$: Observable<string>;
  coursesInfo$: Observable<any[]>;
  filteredCourses$: Observable<any[]>;

  constructor(
    private snack: SnackService,
    public route?: ActivatedRoute,
    private authService?: AuthService,
  ) {
    this.user$ = this.authService.user$;
    /* this.coursesInfo$ = this.authService.coursesInfo$;
    this.filter = new FormControl('');
    this.filter$ = this.filter.valueChanges.pipe(startWith(''));
    this.filteredCourses$ = combineLatest(this.coursesInfo$, this.filter$).pipe(
      map(([states, filterString]) => states.filter(state => state.name.toLowerCase().indexOf(filterString.toLowerCase()) !== -1))
    ); */
  }

  ngOnInit(): void {
    if (this.authService.user$) {
      this.authService.getCoursesInfo(this.route.snapshot.params.id).then(res => {
        return this.coursesInfo = res;
      });
    }
  }

}
