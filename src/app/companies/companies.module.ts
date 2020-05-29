import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CompaniesRoutingModule } from './companies-routing.module';
import { FindEmployeesComponent } from './find-employees/find-employees.component';
import {CoreModule} from '../core/core.module';
import { DashboardJobsComponent } from './dashboard/dashboard-jobs/dashboard-jobs.component';


@NgModule({
  declarations: [FindEmployeesComponent, DashboardJobsComponent],
  imports: [
    CommonModule,
    CompaniesRoutingModule,
    CoreModule
  ]
})
export class CompaniesModule { }
