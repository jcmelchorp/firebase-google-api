import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AngularFireModule } from '@angular/fire';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { environment } from './../environments/environment.prod';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthService } from './auth.service';
import { MaterialModule } from './material.module';

import { AlumnoComponent } from './alumno/alumno.component';
import { ClaseComponent } from './clase/clase.component';
import { ClasesComponent } from './clases/clases.component';
import { ClassroomComponent } from './classroom/classroom.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HomeComponent } from './home/home.component';
import { MaestroComponent } from './maestro/maestro.component';
import { ShellComponent } from './shell/shell.component';
import { TrabajoClaseListaComponent } from './trabajo-clase-lista/trabajo-clase-lista.component';
import { TrabajoClaseComponent } from './trabajo-clase/trabajo-clase.component';
import { TrabajoComponent } from './trabajo/trabajo.component';
import { UserComponent } from './user/user.component';
import { ToolbarComponent } from './shell/toolbar/toolbar.component';


@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    AlumnoComponent,
    MaestroComponent,
    ClassroomComponent,
    ShellComponent,
    HomeComponent,
    DashboardComponent,
    TrabajoComponent,
    TrabajoClaseComponent,
    TrabajoClaseListaComponent,
    ToolbarComponent,
    ClasesComponent,
    ClaseComponent,
  ],
  imports: [
    BrowserModule,
    MaterialModule,
    FlexLayoutModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireAuthModule,
    FontAwesomeModule,
  ],
  providers: [AuthService],
  bootstrap: [AppComponent],
  exports: []
})
export class AppModule {

}
