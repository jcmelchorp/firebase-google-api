import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import firebase from 'firebase/app';
import 'firebase/auth';
import { CourseInfo } from './../course-info.model';
import { AuthService } from './../auth.service';

@Component({
  selector: 'app-alumno',
  templateUrl: './alumno.component.html',
  styleUrls: ['./alumno.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AlumnoComponent implements OnInit {
  @Input() user: firebase.User;
  courses: any[];
  panelOpenState = false;
  constructor(
    public authService: AuthService,
  ) {

  }


  ngOnInit(): void {
    this.authService.getCourses(this.user.uid, 'STUDENT');
  }

  loadTeacherInfo(uid: string) {
    this.courses = this.authService.courses.map(course => {
      this.authService.showTeacherProfile(course.id, uid);
      return {
        id: course.id,
        name: course.name,
        state: course.courseState,
        desc: course.description,
        section: course.section,
        creationTime: course.creationTime,
        updateTime: course.updateTime,
        guardiansEnable: course.guardiansEnable,
        alternateLink: course.alternateLink,
        descHeading: course.descriptionHeading,
        ownerName: this.authService.classroomUser.profile.name.fullName,
        ownerPhotoUrl: this.authService.classroomUser.profile.photoUrl,
        ownerEmail: this.authService.classroomUser.profile.emailAddress,
      }
    })
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
