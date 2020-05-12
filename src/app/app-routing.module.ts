import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {HomeComponent} from './home/home.component';
import {NonAuthGuard} from './core/guards/non-auth.guard';
import {AuthGuard} from './core/guards/auth.guard';
import {FindJobComponent} from './find-job/find-job.component';


const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'find-job',
    component: FindJobComponent
  },
  {
    path: 'auth',
    loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule),
    canActivate: [NonAuthGuard]
  },
  {
    path: 'users',
    loadChildren: () => import('./users/users.module').then(m => m.UsersModule),
    canActivate: [AuthGuard]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
