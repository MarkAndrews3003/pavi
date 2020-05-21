import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {ProfilePageComponent} from './profile-page/profile-page.component';
import {FindJobComponent} from './find-job/find-job.component';
import {ContactUsComponent} from './contact-us/contact-us.component';
import {AboutComponent} from './about/about.component';
import {AuthGuard} from '../core/guards/auth.guard';


const routes: Routes = [
  {
    path: 'profile-page',
    component: ProfilePageComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'find-job',
    component: FindJobComponent
  },
  {
    path: 'contact-us',
    component: ContactUsComponent
  },
  {
    path: 'about',
    component: AboutComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsersRoutingModule {
}
