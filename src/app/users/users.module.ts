import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {UsersRoutingModule} from './users-routing.module';
import {ProfilePageComponent} from './profile-page/profile-page.component';
import {SharedModule} from '../shared/shared.module';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { AboutComponent } from './about/about.component';


@NgModule({
  declarations: [
    ProfilePageComponent,
    ContactUsComponent,
    AboutComponent
  ],
  imports: [
    CommonModule,
    UsersRoutingModule,
    SharedModule
  ]
})
export class UsersModule {
}
