import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { JobsRoutingModule } from './jobs-routing.module';
import { ShowJobComponent } from './show-job/show-job.component';
import {CoreModule} from '../core/core.module';
import { ApplyToJobComponent } from './apply-to-job/apply-to-job.component';


@NgModule({
  declarations: [ShowJobComponent, ApplyToJobComponent],
  imports: [
    CommonModule,
    JobsRoutingModule,
    CoreModule
  ]
})
export class JobsModule { }
