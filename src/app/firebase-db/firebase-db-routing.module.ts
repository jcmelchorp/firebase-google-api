import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FirebaseDbComponent } from './firebase-db.component';

const routes: Routes = [{ path: '', component: FirebaseDbComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FirebaseDbRoutingModule { }
