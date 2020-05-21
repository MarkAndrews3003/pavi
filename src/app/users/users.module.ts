import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {UsersRoutingModule} from './users-routing.module';
import {ProfilePageComponent} from './profile-page/profile-page.component';
import {SharedModule} from '../shared/shared.module';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { AboutComponent } from './about/about.component';
import {CoreModule} from '../core/core.module';
import { ChangeEmailFormComponent } from './profile-page/about-tab/change-email-form/change-email-form.component';
import { ChangePasswordFormComponent } from './profile-page/about-tab/change-password-form/change-password-form.component';
import { AboutTabComponent } from './profile-page/about-tab/about-tab.component';
import { CvPortfolioTabComponent } from './profile-page/cv-portfolio-tab/cv-portfolio-tab.component';
import { SocialMediasTabComponent } from './profile-page/social-medias-tab/social-medias-tab.component';
import { SettingsTabComponent } from './profile-page/settings-tab/settings-tab.component';


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
    SettingsTabComponent
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
