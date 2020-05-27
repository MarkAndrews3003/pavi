import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ShowJobComponent } from './show-job/show-job.component';
import { ApplyToJobComponent } from './apply-to-job/apply-to-job.component';
const routes: Routes = [
  {
    path: 'show-job',
    component: ShowJobComponent
  },
  {
    path: 'apply-to-job',
    component: ApplyToJobComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class JobsRoutingModule { }
