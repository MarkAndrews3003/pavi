import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MaterialModule} from './modules/material.module';
import {HttpClientModule} from '@angular/common/http';
import { HeaderComponent } from './components/layout/header/header.component';
import { NavbarComponent } from './components/layout/navbar/navbar.component';
import { FooterComponent } from './components/layout/footer/footer.component';
import {RouterModule} from '@angular/router';
import { SaveWorkExperienceDialogComponent } from './components/dialogs/save-work-experience-dialog/save-work-experience-dialog.component';


@NgModule({
  declarations: [HeaderComponent, NavbarComponent, FooterComponent, SaveWorkExperienceDialogComponent],
  imports: [
    CommonModule,
    MaterialModule,
    HttpClientModule,
    RouterModule
  ],
  exports: [
    MaterialModule,
    NavbarComponent,
    FooterComponent,
    SaveWorkExperienceDialogComponent
  ]

})
export class CoreModule {
}
