import { CourseState } from './../classroom.model';
import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';

import { Observable } from 'rxjs';

import firebase from 'firebase/app';
import 'firebase/auth';

import { environment } from '../../environments/environment';
/// <reference path="../../node_modules/@types/gapi/index.d.ts" />
declare var gapi;
@Injectable({
  providedIn: 'root'
})

export class FirebaseDbService {
  user$: Observable<firebase.User>;
  courses$: Observable<gapi.client.classroom.Course[]>;
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
        scope: environment.firebaseConfig.scope,
      });
      gapi.client.load('classroom', 'v1', () => {
        console.log('loaded classroom');
        // this.login();
      });
    });
  }
  /**
   * Sign-in with GAPI and Firebase
   * @returns User's Credentials from type firebase.auth.UserCredential
   *
   */
  async login(): Promise<firebase.auth.UserCredential> {
    const googleAuth = gapi.auth2.getAuthInstance();
    const googleUser = await googleAuth.signIn();
    const authResponse = googleUser.getAuthResponse(true);
    const credential = firebase.auth.GoogleAuthProvider.credential(authResponse.id_token, authResponse.access_token);
    return this.afAuth.signInWithCredential(credential);
  }
  /**
   * Sign-out from GAPI and Firebase seassion
   * @returns Promise<any>
   *
   */
  async logout(): Promise<any> {
    return await gapi.auth2.getAuthInstance().signOut().then(() => {
      return this.afAuth.signOut();
    });
  }
  /**
   * A promise to retrive a list of courses according to permissions access user logged in Google Classroom
   *
   * @param uid
   * @param tid Teacher ID from provider for fetching courses in which user is enrolled as teacher
   * @param cState Course State string value from CourseState. See @see function:listCourses
   * @param pSize
   * @param pToken
   */
  async listCourses(
    sid?: string,
    tid?: string,
    cState?: string,
    pSize?: number,
    pToken?: string
  ): Promise<gapi.client.classroom.ListCoursesResponse> {
    const params = {
      studentId: sid || null,
      teacherId: tid || null,
      courseStates: cState || null,
      pageSize: pSize || null,
      pageToken: pToken || null
    };
    let response: gapi.client.classroom.ListCoursesResponse;
    response = await gapi.client.classroom.courses.list(params)
      .then((res: gapi.client.classroom.ListCoursesResponse) => {
        return response = res;
      }).catch(err => {

      });
    return response;
  }
}
