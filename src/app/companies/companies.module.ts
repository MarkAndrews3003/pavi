import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CompaniesRoutingModule } from './companies-routing.module';
import { FindEmployeesComponent } from './find-employees/find-employees.component';


@NgModule({
  declarations: [FindEmployeesComponent],
  imports: [
    CommonModule,
    CompaniesRoutingModule
  ]
})
export class CompaniesModule { }
