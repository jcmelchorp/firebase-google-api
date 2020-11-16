import { Router, Routes } from '@angular/router';
import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';

import { Observable } from 'rxjs';

import firebase from 'firebase/app';
import 'firebase/auth';

import { environment } from './../environments/environment';

import { CourseInfo } from './course-info.model';

declare var gapi;

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  user$: Observable<firebase.User>;
  classroomUser: any;
  calendarItems: any[];
  courses$: Observable<any[]>;
  courses: any[];
  results: any;
  coursesArray: CourseInfo[];
  isQuery = false;
  constructor(
    public afAuth: AngularFireAuth,
  ) {
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
    });
  }
  async login() {
    const googleAuth = gapi.auth2.getAuthInstance();
    const googleUser = await googleAuth.signIn();
    const authResponse = googleUser.getAuthResponse(true);
    const credential = firebase.auth.GoogleAuthProvider.credential(authResponse.id_token, authResponse.access_token);
    return this.afAuth.signInWithCredential(credential);
  }

  logout(): void {
    gapi.auth2.getAuthInstance().signOut().then(() => {
      this.afAuth.signOut();
    });
  }

  async getCourses(uid?: string, role?: string) {
    /* this.isQuery = true; */
    let params = {};
    if (role === 'STUDENT') {
      params = { studentId: uid };
    } else if (role === 'TEACHER') {
      params = { teacherId: uid };
    } else {
      params = {};
    }
    return await gapi.client.classroom.courses.list(params).then(resp => {
      this.courses = resp.result.courses;
      /* this.isQuery = !this.isQuery; */
      return resp.result.courses;
    }).catch(resp => {
      /* this.isQuery = !this.isQuery; */
      this.courses = null;
      return resp.error;
    });
  }

  async showProfile(uid: string) {
    /* this.isQuery = true; */
    return await gapi.client.classroom.userProfiles.get({
      userId: uid
    }).then(resp => {
      this.classroomUser = resp.result;
      /* this.isQuery = !this.isQuery; */
      return resp.result;
    }).catch(resp => {
      /* this.isQuery = !this.isQuery; */
      this.classroomUser = null;
      return resp.error;
    });
  }

  async showTeacherProfile(cid: string, uid: string) {
    /* this.isQuery = !this.isQuery; */
    return await gapi.client.classroom.courses.teachers.get({
      courseId: cid,
      userId: uid
    }).then(resp => {
      this.classroomUser = resp.result;
      /* this.isQuery = !this.isQuery; */
      return resp.result;
    }).catch(resp => {
      /* this.isQuery = !this.isQuery; */
      this.classroomUser = null;
      return resp.error;
    });
  }

  getClassroomUser(uid: any) {
    const fetchClassroomCredentials = (id: any) => gapi.client.request({
      path: `classroom/v1/userProfiles`,
      query: id,
      params: {},
      method: 'GET',
    });
    return this.classroomUser = fetchClassroomCredentials(uid).then((res: any) => {
      return res;
    });
  }



  getAllCourses() {
    let batch = gapi.client.newBatch();
    const fetchCourses = () => gapi.client.request({
      path: 'classroom/v1/courses',
      params: {},
      method: 'GET',
    });
    const fetchTeachersOnCourse = (courseId: any) => gapi.client.request({
      path: `classroom/v1/courses/${courseId}/teachers`,
      params: {}
    });

    /* let coursesRequest = fetchCourses();
    let teachersRequest = fetchTeachersOnCourse() */
    /*  batch.add(fetchCourses);
     batch.add(fetchTeachersOnCourse); */
    /* let resolvePromise = gapi.client.Batch.then;
    console.log(resolvePromise); */
    /* return resolvePromise */
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
    const data = result.courses.map((course: { id: string; ownerId: any; name: any; section: any; room: any; description: any; descriptionHeading: any; creationTime: any; updateTime: any; guardiansEnabled: any; alternateLink: any; }) => {
      let ownerName = gapi.client.classroom.courses.teachers.get({ courseId: course.id, userId: course.ownerId }).then(() => {
        return ownerName;
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
