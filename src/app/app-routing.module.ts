import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ClassroomComponent } from './classroom/classroom.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HomeComponent } from './home/home.component';
import { ShellComponent } from './shell/shell.component';
import { TrabajoComponent } from './trabajo/trabajo.component';

const routes: Routes = [{
  path: '', component: ShellComponent, children: [
    { path: '', component: HomeComponent },
    { path: 'user/:id', component: DashboardComponent },
    {
      path: 'classroom', component: ClassroomComponent
    },
    { path: 'user/:id/trabajo/:courseId', component: TrabajoComponent },

  ]
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
