import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {FindEmployeesComponent} from './find-employees/find-employees.component';
import {DashboardJobsComponent} from './dashboard/dashboard-jobs/dashboard-jobs.component';


const routes: Routes = [
  {
    path: 'find-employees',
    component: FindEmployeesComponent
  },
  {
    path: 'dashboard-jobs',
    component: DashboardJobsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CompaniesRoutingModule {
}
