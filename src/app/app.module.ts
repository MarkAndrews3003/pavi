import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {HomeComponent} from './home/home.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {CoreModule} from './core/core.module';
import {LoginComponent} from './auth/login/login.component';



import {JwtHelperService} from '@auth0/angular-jwt';
import {JwtModule} from '@auth0/angular-jwt';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {ToastrModule} from 'ngx-toastr';
import {HTTP_INTERCEPTORS} from '@angular/common/http';
import {RequestInterceptor} from './core/helpers/http.interceptor';
import { ProfilePageComponent } from './users/profile-page/profile-page.component';
import { ProfilePageOpenComponent } from './users/profile-page-open/profile-page-open.component';
import { FindJobComponent } from './find-job/find-job.component';

// Token getter for JWT module
export function tokenGetter() {
  return localStorage.getItem('token') || '';
}


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    FindJobComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    CoreModule,
    FormsModule,
    ReactiveFormsModule,
    JwtModule.forRoot({
      config: {
        tokenGetter,
        whitelistedDomains: ['localhost:3000'],
        blacklistedRoutes: ['localhost:3000/auth/']
      }
    }),
    ToastrModule.forRoot({
      preventDuplicates: true
    }),
  ],
  providers: [
    JwtHelperService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: RequestInterceptor,
      multi: true
    },
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
