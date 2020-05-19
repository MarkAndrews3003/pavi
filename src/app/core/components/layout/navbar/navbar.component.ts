import {Component, OnInit} from '@angular/core';
import {Data, NavigationEnd, Router} from '@angular/router';
import {filter} from 'rxjs/operators';
import {NAVBAR_LINKS} from '../../../constants/general';
import {AuthService} from "../../../services/auth.service";
import {GetAuthUserPipe} from '../../../../shared/pipes/get-auth-user.pipe';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  routerUrl;
  navbarLinks = NAVBAR_LINKS;
  authUser;

  constructor(
    public router: Router,
    public auth: AuthService,
    private getAuthUser: GetAuthUserPipe
  ) {

  }

  ngOnInit(): void {
    this.authUser = this.getAuthUser.transform();
    console.log('OK')

    if (this.auth.loggedIn()) {

      // Removing unnecessary links for each user role
      if (this.authUser.roles.includes('company_user')) {
        this.navbarLinks = this.navbarLinks.filter(n => n.name !== 'Find job');
      } else {
        this.navbarLinks = this.navbarLinks.filter(n => n.name !== 'Find employee');
      }
    }
  }

  goToLoginPage() {
    if (!this.auth.loggedIn()) {
      this.router.navigate(['auth/login']);
    }
  }

}
