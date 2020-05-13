import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {UsersRoutingModule} from './users-routing.module';
import {ProfilePageComponent} from './profile-page/profile-page.component';
import {SharedModule} from '../shared/shared.module';


@NgModule({
  declarations: [
    ProfilePageComponent
  ],
  imports: [
    CommonModule,
    UsersRoutingModule,
    SharedModule
  ]
})
export class UsersModule {
}
