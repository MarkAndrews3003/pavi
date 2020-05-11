import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {UsersRoutingModule} from './users-routing.module';
import {ProfilePageComponent} from './profile-page/profile-page.component';
import {ProfilePageOpenComponent} from './profile-page-open/profile-page-open.component';


@NgModule({
  declarations: [
    ProfilePageComponent,
    ProfilePageOpenComponent
  ],
  imports: [
    CommonModule,
    UsersRoutingModule
  ]
})
export class UsersModule {
}
