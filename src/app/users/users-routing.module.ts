import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {ProfilePageComponent} from './profile-page/profile-page.component';
import {FindJobComponent} from './find-job/find-job.component';


const routes: Routes = [
  {
    path: 'profile-page',
    component: ProfilePageComponent
  },
  {
    path: 'find-job',
    component: FindJobComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsersRoutingModule {
}
