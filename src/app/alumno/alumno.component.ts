import { AuthService } from './../auth.service';
import { AfterViewChecked, ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import firebase from 'firebase/app';
import 'firebase/auth';

@Component({
  selector: 'app-alumno',
  templateUrl: './alumno.component.html',
  styleUrls: ['./alumno.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AlumnoComponent implements OnInit {
  @Input() user: firebase.User;
  panelOpenState = false;
  constructor(
    public authService: AuthService,
  ) {

  }


  ngOnInit(): void {

    this.authService.getCourses(this.user.uid, 'STUDENT');
  }

  onExpand(cid: string, uid: string) {
    this.authService.showTeacherProfile(cid, uid);
    this.panelOpenState = true;
  }
  onContract() {
    this.authService.classroomUser = null;
    // this.authService.showTeacherProfile(cid, uid);
    this.panelOpenState = false;
  }
}
