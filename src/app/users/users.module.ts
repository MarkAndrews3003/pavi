import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {UsersRoutingModule} from './users-routing.module';
import {ProfilePageComponent} from './profile-page/profile-page.component';
import {SharedModule} from '../shared/shared.module';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { AboutComponent } from './about/about.component';
import {CoreModule} from '../core/core.module';
import { ChangeEmailFormComponent } from './profile-page/tabs/about-tab/change-email-form/change-email-form.component';
import { ChangePasswordFormComponent } from './profile-page/tabs/about-tab/change-password-form/change-password-form.component';
import { AboutTabComponent } from './profile-page/tabs/about-tab/about-tab.component';
import { CvPortfolioTabComponent } from './profile-page/tabs/cv-portfolio-tab/cv-portfolio-tab.component';
import { SocialMediasTabComponent } from './profile-page/tabs/social-medias-tab/social-medias-tab.component';
import { SettingsTabComponent } from './profile-page/tabs/settings-tab/settings-tab.component';
import { JobsSectionComponent } from './profile-page/tabs-bottom-sections/jobs-section/jobs-section.component';
import { PortfolioSectionComponent } from './profile-page/tabs-bottom-sections/portfolio-section/portfolio-section.component';
import { WorkExperienceComponent } from './profile-page/tabs-bottom-sections/portfolio-section/work-experience/work-experience.component';
import { CertificationComponent } from './profile-page/tabs-bottom-sections/portfolio-section/certification/certification.component';
import { ProgrammingSkillsComponent } from './profile-page/tabs-bottom-sections/portfolio-section/programming-skills/programming-skills.component';
import { EducationComponent } from './profile-page/tabs-bottom-sections/portfolio-section/education/education.component';
import {FindEmployeesComponent} from './find-employees/find-employees.component';


@NgModule({
  declarations: [
    ProfilePageComponent,
    ContactUsComponent,
    AboutComponent,
    ChangeEmailFormComponent,
    ChangePasswordFormComponent,
    AboutTabComponent,
    CvPortfolioTabComponent,
    SocialMediasTabComponent,
    SettingsTabComponent,
    JobsSectionComponent,
    PortfolioSectionComponent,
    WorkExperienceComponent,
    CertificationComponent,
    ProgrammingSkillsComponent,
    EducationComponent,
    FindEmployeesComponent
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
