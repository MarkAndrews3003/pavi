import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {CompaniesRoutingModule} from './companies-routing.module';
import {CoreModule} from '../core/core.module';
import {DashboardJobsComponent} from './dashboard/dashboard-jobs/dashboard-jobs.component';
import { DasboardArchiveJobsComponent } from './dashboard/dasboard-archive-jobs/dasboard-archive-jobs.component';
import { DashboardMoreArchiveJobsComponent } from './dashboard/dashboard-more-archive-jobs/dashboard-more-archive-jobs.component';


@NgModule({
  declarations: [
    DashboardJobsComponent,
    DasboardArchiveJobsComponent,
    DashboardMoreArchiveJobsComponent
  ],
  imports: [
    CommonModule,
    CompaniesRoutingModule,
    CoreModule
  ]
})
export class CompaniesModule {
}
