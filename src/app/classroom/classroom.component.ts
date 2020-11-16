import { Component, OnInit } from '@angular/core';
import { AuthService } from './../auth.service';
import firebase from 'firebase/app';
import 'firebase/auth';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-classroom',
  templateUrl: './classroom.component.html',
  styleUrls: ['./classroom.component.scss']
})
export class ClassroomComponent implements OnInit {
  user$: Observable<firebase.User>;

  constructor(
    public authService: AuthService
  ) {
    this.user$ = this.authService.user$;
  }
  ngOnInit(): void {
  }

}
