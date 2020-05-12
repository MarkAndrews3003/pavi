import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MaterialModule} from '../core/modules/material.module';
import { GetAuthUserPipe } from './pipes/get-auth-user.pipe';


@NgModule({
  declarations: [GetAuthUserPipe],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule
  ],
  providers: [
    GetAuthUserPipe
  ],
  exports: [
    FormsModule,
    ReactiveFormsModule,
    MaterialModule
  ]
})
export class SharedModule {
}
