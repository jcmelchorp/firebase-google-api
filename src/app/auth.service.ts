import { Router, Routes } from '@angular/router';
import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { analyzeAndValidateNgModules, NONE_TYPE } from '@angular/compiler';
import { getLocaleDateFormat } from '@angular/common';

import { Observable } from 'rxjs';

import firebase from 'firebase/app';
import 'firebase/auth';

import { environment } from './../environments/environment';

import { Course } from './classroom.model';
import { CourseInfo } from './course-info.model';
/// <reference path="../../node_modules/@types/gapi/index.d.ts" />
declare var gapi;

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  user$: Observable<firebase.User>;
  clase$: Observable<any>;
  coursesInfo$: Observable<any[]>;
  courses$: Observable<any[]>;
  courses: any[];
  results: any;
  coursesArray: CourseInfo[];
  isQuery = false;
  classroomUser: any;
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
        client_id: environment.firebaseConfig.clientId,
        discoveryDocs: environment.firebaseConfig.discoveryDocs,
        scope: environment.firebaseConfig.scope,
      });
      gapi.client.load('classroom', 'v1', () => {
        console.log('loaded classroom');
        //this.login();
      });
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
  /**
   * Returns a list of student submissions that the requester is permitted to view,
   * factoring in the OAuth scopes of the request.
   * "-" may be specified as the courseWorkId to include student submissions for
   * multiple course work items.
   * @param cid the course ID
   * @param cwid the courseWork ID
   */
  async getStudetSubmission(cid: string, cwid: string) {
    let params = { courseId: cid };
    let studentSubmission = await gapi.client.classroom.courses.courseWork.studentSubmission.list(params)
      .then(res => {
        if (res.result.studentSubmissions !== []) {
          return res.result.studentSubmissions;
        } else {
          return [];
        }
      }).catch(err => {
        if (err.code.status === 'NOT_FOUND') {

        } else if (err.code.status === 'INVALID_ARGUMENT') {

        } else if (err.code.status === 'PERMISSION_DENIED') {

        }
      });
    console.log(studentSubmission);
    if (studentSubmission === undefined) {
      studentSubmission = [];
    }
    return studentSubmission;
  }
  /**
   * A promise to retrive a CourseWork[] as any according to permissions access
   * user logged in Google Classroom
   * @param cid Course ID
   */
  async getCoursework(cid: string) {
    const params = { courseId: cid };
    let courseWork = await gapi.client.classroom.courses.courseWork.list(params)
      .then(res => {
        if (res.courseWork !== []) {
          return res.courseWork;
        } else {
          return [];
        }
      }).catch(err => {
        // console.log(err)
        return [];
      });
    // console.log(coursesWork);
    if (courseWork === undefined) {
      courseWork = [];
    }
    return courseWork;
  }
  /**
   * A promise to retrive a CourseInfo object as any according to permissions access user logged in Google Classroom
   * @param uid User UID from providerData on Google SignIn firebase.User
   * @param role (Optional) string as selector to filter the response to those courses in role. Could be 'STUDENT' or 'TEACHER'
   */
  async getCoursesInfo(uid?: string, role?: string) {
    let params = {};
    if (role === 'STUDENT') {
      params = { studentId: uid };
    } else if (role === 'TEACHER') {
      params = { teacherId: uid };
    } else {
      params = {};
    }
    const coursesList = await gapi.client.classroom.courses.list(params).then(res => {
      if (res !== []) {
        return res.result.courses;
      }
    });
    let owner;
    let courseInfo;
    const coursesInfo = [];
    coursesList.forEach(async course => {
      owner = await gapi.client.classroom.userProfiles.get({ userId: course.ownerId }).then(own => {
        return owner = own.result;
      });
      courseInfo = {
        id: course.id,
        name: course.name,
        section: course.section,
        desc: course.description,
        descHeading: course.descriptionHeading,
        creationTime: course.creationTime,
        updateTime: course.updateTime,
        state: course.courseState,
        alternateLink: course.alternateLink,
        guardiansEnabled: course.guardiansEnabled,
        ownGivenName: owner.name.givenName,
        ownFamilyName: owner.name.familyName,
        ownEmail: owner.emailAddress,
        ownPhoto: 'https:' + owner.photoUrl,
        ownVerified: owner.verifiedTeacher,
      };
      coursesInfo.push(courseInfo);
    });
    this.coursesInfo$ = courseInfo;
    return coursesInfo;
  }
  async getCourseInfo(cid: string) {
    const params = { id: cid };
    const courseInfo = await gapi.client.classroom.courses.get(params).then(res => {
      if (res !== []) {
        return res.result.courses;
      } else {
        return [];
      }
    });
    return this.clase$ = courseInfo;
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
      this.courses$ = resp.result.courses;
      /* this.isQuery = !this.isQuery; */
      return resp.result.courses;
    }).then().catch(resp => {
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
    let courses: Course[];
    courses = await gapi.client.classroom.courses.list().then(res => {
      return courses = res.result.courses;
    });
    return courses;
  }
}
