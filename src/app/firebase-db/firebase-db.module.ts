import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFireModule } from '@angular/fire';
import { FlexLayoutModule } from '@angular/flex-layout';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { MaterialModule } from './../material-design/material.module';

import { FirebaseDbRoutingModule } from './firebase-db-routing.module';
import { FirebaseDbComponent } from './firebase-db.component';
import { FirebaseDbService } from './firebase-db.service';


@NgModule({
  declarations: [FirebaseDbComponent],
  imports: [
    CommonModule,
    FirebaseDbRoutingModule,
    MaterialModule,
    FlexLayoutModule,
    FontAwesomeModule,
    AngularFireModule,
    AngularFireAuthModule
  ],
  providers: [FirebaseDbService]
})
export class FirebaseDbModule { }
