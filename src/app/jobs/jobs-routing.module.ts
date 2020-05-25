import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ShowJobComponent } from './show-job/show-job.component';

const routes: Routes = [
  {
    path: 'show-job',
    component: ShowJobComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class JobsRoutingModule { }
