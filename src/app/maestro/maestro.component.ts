import { Component, Input, OnInit } from '@angular/core';
import firebase from 'firebase/app';
import 'firebase/auth';
import { AuthService } from '../auth.service';
@Component({
  selector: 'app-maestro',
  templateUrl: './maestro.component.html',
  styleUrls: ['./maestro.component.scss']
})
export class MaestroComponent implements OnInit {
  @Input() user: firebase.User;
  panelOpenState = false;
  constructor(
    public authService: AuthService,
  ) { }

  ngOnInit(): void {

  }
  ngAfterViewInit() {
    this.authService.getCourses(this.user.uid, 'TEACHER');

  }
  onExpand(uid: string) {
    this.authService.showProfile(uid);
    this.panelOpenState = true;
  }
}
