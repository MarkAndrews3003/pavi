import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MaterialModule} from './modules/material.module';
import {HttpClientModule} from '@angular/common/http';
import {HeaderComponent} from './components/layout/header/header.component';
import {NavbarComponent} from './components/layout/navbar/navbar.component';
import {FooterComponent} from './components/layout/footer/footer.component';
import {RouterModule} from '@angular/router';
import {SaveWorkExperienceDialogComponent} from './components/dialogs/save-work-experience-dialog/save-work-experience-dialog.component';
import {SaveEducationCertificationInfoDialogComponent} from './components/dialogs/save-education-certification-info-dialog/save-education-certification-info-dialog.component';
import {SaveProgrammingSkillsDialogComponent} from './components/dialogs/save-programming-skills-dialog/save-programming-skills-dialog.component';
import { SaveEducationDialogComponent } from './components/dialogs/save-education-dialog/save-education-dialog.component';
import { SaveCertificationDialogComponent } from './components/dialogs/save-certification-dialog/save-certification-dialog.component';


@NgModule({
  declarations: [
    HeaderComponent,
    NavbarComponent,
    FooterComponent,
    SaveWorkExperienceDialogComponent,
    SaveEducationCertificationInfoDialogComponent,
    SaveProgrammingSkillsDialogComponent,
    SaveEducationDialogComponent,
    SaveCertificationDialogComponent
  ],
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
    SaveWorkExperienceDialogComponent,
    SaveEducationCertificationInfoDialogComponent,
    SaveProgrammingSkillsDialogComponent,
    SaveEducationDialogComponent,
    SaveCertificationDialogComponent
  ]

})
export class CoreModule {
}
