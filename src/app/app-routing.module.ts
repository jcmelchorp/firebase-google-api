import { HomeComponent } from './home/home.component';
import { ClassroomComponent } from './classroom/classroom.component';

import { ShellComponent } from './shell/shell.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';

const routes: Routes = [{
  path: '', component: ShellComponent, children: [
    { path: '', component: HomeComponent },
    { path: 'dashboard', component: DashboardComponent },
    {
      path: 'classroom', component: ClassroomComponent
    }
  ]
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
