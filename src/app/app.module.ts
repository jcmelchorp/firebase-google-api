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
import { SnackService } from './snack.service';

import { AlumnoComponent } from './alumno/alumno.component';
import { ClaseComponent } from './clase/clase.component';
import { ClasesComponent } from './clases/clases.component';
import { ClassroomComponent } from './classroom/classroom.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HomeComponent } from './home/home.component';
import { MaestroComponent } from './maestro/maestro.component';
import { MaterialModule } from './material-design/material.module';
import { ShellComponent } from './shell/shell.component';
import { TrabajoClaseListaComponent } from './trabajo-clase-lista/trabajo-clase-lista.component';
import { TrabajoClaseComponent } from './trabajo-clase/trabajo-clase.component';
import { TrabajoComponent } from './trabajo/trabajo.component';
import { UserComponent } from './user/user.component';
import { ToolbarComponent } from './shell/toolbar/toolbar.component';
import { EntregasComponent } from './entregas/entregas.component';


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
    EntregasComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MaterialModule,
    FlexLayoutModule,
    FontAwesomeModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireAuthModule,
  ],
  providers: [AuthService, SnackService],
  bootstrap: [AppComponent],
  exports: []
})
export class AppModule {

}
