import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ClasesComponent } from './clases/clases.component';
import { ClassroomComponent } from './classroom/classroom.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HomeComponent } from './home/home.component';
import { ShellComponent } from './shell/shell.component';
import { TrabajoClaseComponent } from './trabajo-clase/trabajo-clase.component';
import { TrabajoComponent } from './trabajo/trabajo.component';

const routes: Routes = [{
  path: '', component: ShellComponent, children: [
    { path: '', component: HomeComponent },
    {
      path: 'user/:id', component: DashboardComponent, children: [
        { path: '', component: ClasesComponent },

        { path: 'trabajo/:courseId', component: TrabajoClaseComponent },
      ]
    },
    {
      path: 'classroom', component: ClassroomComponent
    },

  ]
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
