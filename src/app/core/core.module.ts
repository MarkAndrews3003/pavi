import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MaterialModule} from './modules/material.module';
import {HttpClientModule} from '@angular/common/http';
import { HeaderComponent } from './components/layout/header/header.component';
import { NavbarComponent } from './components/layout/navbar/navbar.component';
import { FooterComponent } from './components/layout/footer/footer.component';
import {RouterModule} from '@angular/router';


@NgModule({
  declarations: [HeaderComponent, NavbarComponent, FooterComponent],
  imports: [
    CommonModule,
    MaterialModule,
    HttpClientModule,
    RouterModule
  ],
  exports: [
    MaterialModule,
    NavbarComponent,
    FooterComponent
  ]

})
export class CoreModule {
}
