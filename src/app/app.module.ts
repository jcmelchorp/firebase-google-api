import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AngularFireModule } from '@angular/fire';
import { AngularFireAuthModule } from '@angular/fire/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyDk1qgWOj6c2woDFxSbPdayrpUVFv97Ejg',
  authDomain: 'rds-firebaseui.firebaseapp.com',
  databaseURL: 'https://rds-firebaseui.firebaseio.com',
  projectId: 'rds-firebaseui',
  storageBucket: 'rds-firebaseui.appspot.com',
  messagingSenderId: '382142356931',
  appId: '1:382142356931:web:729d21482f39ccc2093176',
  measurementId: 'G-FKR8NGWM3R'
};


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireAuthModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
