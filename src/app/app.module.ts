import { AuthService } from './auth.service';
import { MaterialModule } from './material.module';
import { environment } from './../environments/environment.prod';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AngularFireModule } from '@angular/fire';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { UserComponent } from './user/user.component';
import { AlumnoComponent } from './alumno/alumno.component';
import { MaestroComponent } from './maestro/maestro.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ClassroomComponent } from './classroom/classroom.component';
import { ShellComponent } from './shell/shell.component';
import { HomeComponent } from './home/home.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { LayoutModule } from '@angular/cdk/layout';


@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    AlumnoComponent,
    MaestroComponent,
    ClassroomComponent,
    ShellComponent,
    HomeComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    MaterialModule,
    FlexLayoutModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireAuthModule,
    MatGridListModule,
    MatCardModule,
    MatMenuModule,
    MatIconModule,
    MatButtonModule,
    LayoutModule,
  ],
  providers: [AuthService],
  bootstrap: [AppComponent],
  exports: []
})
export class AppModule { }
