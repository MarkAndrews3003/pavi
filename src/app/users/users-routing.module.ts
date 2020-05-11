import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {ProfilePageComponent} from './profile-page/profile-page.component';
import {ProfilePageOpenComponent} from './profile-page-open/profile-page-open.component';


const routes: Routes = [
  {
    path: 'profile-page',
    component: ProfilePageComponent
  },
  {
    path: 'profile-page-open',
    component: ProfilePageOpenComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsersRoutingModule {
}
