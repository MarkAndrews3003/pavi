import {Component, OnInit} from '@angular/core';
import {Data, NavigationEnd, Router} from '@angular/router';
import {filter} from 'rxjs/operators';
import {NAVBAR_LINKS} from '../../../constants/general';
import {AuthService} from "../../../services/auth.service";
import {GetAuthUserPipe} from '../../../../shared/pipes/get-auth-user.pipe';


@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  routerUrl;
  footerLinks = NAVBAR_LINKS;
  authUser;

  constructor(
    public router: Router,
    public auth: AuthService,
    private getAuthUser: GetAuthUserPipe
  ) {
  }

  ngOnInit(): void {
    this.authUser = this.getAuthUser.transform();

    if (this.auth.loggedIn()) {

      // Removing unnecessary links for each user role
      if (this.authUser.roles.includes('company_user')) {
        this.footerLinks = this.footerLinks.filter(n => n.name !== 'Find job');
      } else {
        this.footerLinks = this.footerLinks.filter(n => n.name !== 'Find employee');
      }
    }
  }

  goToLoginPage() {
    if (!this.auth.loggedIn()) {
      this.router.navigate(['auth/login']);
    }
  }

}
