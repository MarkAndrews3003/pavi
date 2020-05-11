import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {UsersRoutingModule} from './users-routing.module';
import {ProfilePageComponent} from './profile-page/profile-page.component';
import {ProfilePageOpenComponent} from './profile-page-open/profile-page-open.component';
import {SharedModule} from '../shared/shared.module';


@NgModule({
  declarations: [
    ProfilePageComponent,
    ProfilePageOpenComponent
  ],
  imports: [
    CommonModule,
    UsersRoutingModule,
    SharedModule
  ]
})
export class UsersModule {
}
