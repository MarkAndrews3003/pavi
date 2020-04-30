import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {AuthRoutingModule} from './auth-routing.module';
import {UserSignUpComponent} from './user-sign-up/user-sign-up.component';
import {CompanySignUpComponent} from './company-sign-up/company-sign-up.component';
import {SharedModule} from '../shared/shared.module';
import { Step1Component } from './company-sign-up/step1/step1.component';
import { Step2Component } from './company-sign-up/step2/step2.component';
import { Step3Component } from './company-sign-up/step3/step3.component';


@NgModule({
  declarations: [UserSignUpComponent, CompanySignUpComponent, Step1Component, Step2Component, Step3Component],
  imports: [
    CommonModule,
    AuthRoutingModule,
    SharedModule
  ]
})
export class AuthModule {
}
