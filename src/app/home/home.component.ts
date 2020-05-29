import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {AuthService} from '../core/services/auth.service';
import {GetAuthUserPipe} from '../shared/pipes/get-auth-user.pipe';
import {HOMEPAGE_OWL_CAROUSEL_OPTIONS} from '../core/constants/general';
import {OwlOptions} from 'ngx-owl-carousel-o';
import {JwtHelperService} from '@auth0/angular-jwt';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

    authUser;
    owlOptions: OwlOptions = HOMEPAGE_OWL_CAROUSEL_OPTIONS;

    constructor(
        public router: Router,
        public auth: AuthService,
        private getAuthUser: GetAuthUserPipe,
        private jwtHelper: JwtHelperService
    ) {
    }

    ngOnInit(): void {
        console.log(this.jwtHelper.isTokenExpired())
        this.authUser = this.getAuthUser.transform();
    }

    isTokenExpired() {
        return !this.jwtHelper.isTokenExpired();
    }

}
