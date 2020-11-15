import { AuthService } from './auth.service';
import { Component, OnInit } from '@angular/core';
import { Course } from './classroom.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  panelOpenState = false;
  title = 'firebase-google-api';
  constructor(public authService: AuthService) { }

  getMyCourses(uid) {
    this.authService.getCourses(uid);
  }

  onExpand(uid) {
    this.authService.showProfile(uid);
    this.panelOpenState = true;
  }
  getOwnerProfile(cid) {
  }
}
