import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { JobsRoutingModule } from './jobs-routing.module';
import { ShowJobComponent } from './show-job/show-job.component';
import {CoreModule} from '../core/core.module';


@NgModule({
  declarations: [ShowJobComponent],
  imports: [
    CommonModule,
    JobsRoutingModule,
    CoreModule
  ]
})
export class JobsModule { }
