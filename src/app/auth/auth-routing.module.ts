import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {UserSignUpComponent} from './user-sign-up/user-sign-up.component';
import {CompanySignUpComponent} from './company-sign-up/company-sign-up.component';
import {LoginComponent} from './login/login.component';


const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'user-registration',
    component: UserSignUpComponent
  },
  {
    path: 'company-registration',
    component: CompanySignUpComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule {
}
