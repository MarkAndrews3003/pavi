import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {FindEmployeesComponent} from './find-employees/find-employees.component';


const routes: Routes = [
  {
    path: 'find-employees',
    component: FindEmployeesComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CompaniesRoutingModule {
}
