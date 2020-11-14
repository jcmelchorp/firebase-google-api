import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';

import { Observable } from 'rxjs';

import { auth } from 'firebase/app';

import { env } from 'process';

import { environment } from './../environments/environment.prod';

declare var gapi: any;

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  user$: Observable<firebase.User>;
  calendarItems: any[];
  courses$: Observable<any[]>;

  constructor(public afAuth: AngularFireAuth) {
    this.initClient();
    this.user$ = afAuth.authState;
  }

  initClient() {
    gapi.load('client', () => {
      console.log('loaded client');
      gapi.client.init({
        apiKey: environment.firebaseConfig.apiKey,
        clientId: environment.firebaseConfig.clientId,
        discoveryDocs: environment.firebaseConfig.discoveryDocs,
        scope: environment.firebaseConfig.scope
      });
      gapi.client.load('classroom', 'v1', () => console.log('loaded classroom'));
    })
  }
  async login() {
    const googleAuth = gapi.auth2.getAuthInstance();
    const googleUser = await googleAuth.signIn();
    const authResponse = googleUser.getAuthResponse(true);
    const credential = auth.GoogleAuthProvider.credential(authResponse.id_token, authResponse.access_token);
    return this.afAuth.signInWithCredential(credential);
  }


  logout() {
    this.afAuth.signOut();
  }

  async listTeachers(cid: string) {
    const response = await gapi.client.classroom.courses.teachers.list({ courseId: cid });
    const result = response.result;
    const res = result.teachers;
    return res;
  }

  async getTeacherProfile(uid: string) {
    const response = await gapi.client.classroom.userProfiles.get({ userId: uid });
    const result = response.result;
    const res = result;
    return res;
  }

  async listCourses() {
    const response = await gapi.client.classroom.courses.list();
    const result = response.result;
    const data = result.courses.map(course => {
      let ownerName = gapi.client.classroom.courses.teachers.get({ courseId: course.id, userId: course.ownerId }).then((profile) => {
        return ownerName = profile.profile.name.fullName;
      });
      let teacherGroup = this.listTeachers(course.id).then(teachers => {
        return teacherGroup = teachers;
      });
      return {
        courseId: course.id,
        courseName: course.name,
        section: course.section,
        room: course.room,
        desc: course.description,
        descHeading: course.descriptionHeading,
        creationDate: course.creationTime,
        lastUpdate: course.updateTime,
        guardiansEnable: course.guardiansEnabled,
        alternateLink: course.alternateLink,
        ownerName: ownerName,
        teachersList: teacherGroup,
      };
    })
    console.log(data);
    this.courses$ = data;
    return data;
  }
}
