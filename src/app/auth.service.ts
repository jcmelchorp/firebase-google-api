import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AngularFireAuth } from '@angular/fire/auth';
import { auth } from 'firebase/app';

declare var gapi: any;

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  user$: Observable<firebase.User>;
  calendarItems: any[];

  constructor(public afAuth: AngularFireAuth) {
    this.initClient();
    this.user$ = afAuth.authState;
  }

  initClient() {
    gapi.load('client', () => {
      console.log('loaded client');
      gapi.client.init({
        apiKey: 'AIzaSyDk1qgWOj6c2woDFxSbPdayrpUVFv97Ejg',
        clientId: '382142356931-etv8n7tsj90gq9vloitis46vtr6mbqtt.apps.googleusercontent.com',
        discoveryDocs: 'https://www.googleapis.com/discovery/v1/apis/calendar/v3/rest',
        scope: 'email profile https://www.googleapis.com/auth/calendar'
      });
      gapi.client.load('calendar', 'v3', () => console.log('loaded calendar'));
    })
  }

  async login() {
    const googleAuth = gapi.auth2.getAuthInstance();
    const googleUser = await googleAuth.signIn();
    const token = googleUser.getAuthResponse().id_token;
    console.log(googleUser);
    const credential = auth.GoogleAuthProvider.credential(token);
    await this.afAuth.signInAndRetrieveDataWithCredential(credential);
  }

  logout() {
    this.afAuth.signOut();
  }

  async getCalendar() {
    const events = await gapi.client.calendar.events.list({
      calendarId: 'primary',
      timeMin: new Date().toISOString(),
      showDeleted: false,
      singleEvents: true,
      maxResults: 10,
      orderBy: 'startTime',
    });
    console.log(events);
    this.calendarItems = events.result.items;
  }

  async insertEvent() {
    const insert = await gapi.client.calendar.events.insert({
      calendarId: 'primary',
      start: {
        dateTime: hoursFromNow(2),
        timeZone: 'America/Mexico_City'
      },
      end: {
        dateTime: hoursFromNow(3),
        timeZone: 'America/Mexico_City'
      },
      summary: 'Have Fun!',
      description: 'This is a test from an Angular WebApp'
    });
    await this.getCalendar();
  }

}
const hoursFromNow = (n) => new Date(Date.now() + n * 1000 * 60 * 60).toISOString();
