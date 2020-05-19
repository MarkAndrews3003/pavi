import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {UsersRoutingModule} from './users-routing.module';
import {ProfilePageComponent} from './profile-page/profile-page.component';
import {SharedModule} from '../shared/shared.module';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { AboutComponent } from './about/about.component';
import {CoreModule} from '../core/core.module';
import { ChangeEmailFormComponent } from './profile-page/change-email-form/change-email-form.component';
import { ChangePasswordFormComponent } from './profile-page/change-password-form/change-password-form.component';


@NgModule({
  declarations: [
    ProfilePageComponent,
    ContactUsComponent,
    AboutComponent,
    ChangeEmailFormComponent,
    ChangePasswordFormComponent
  ],
  imports: [
    CommonModule,
    UsersRoutingModule,
    SharedModule,
    CoreModule
  ]
})
export class UsersModule {
}
