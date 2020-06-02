import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {CompaniesRoutingModule} from './companies-routing.module';
import {CoreModule} from '../core/core.module';
import {DashboardJobsComponent} from './dashboard/dashboard-jobs/dashboard-jobs.component';


@NgModule({
  declarations: [
    DashboardJobsComponent
  ],
  imports: [
    CommonModule,
    CompaniesRoutingModule,
    CoreModule
  ]
})
export class CompaniesModule {
}
