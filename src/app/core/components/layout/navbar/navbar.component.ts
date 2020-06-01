import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Data, NavigationEnd, Router} from '@angular/router';
import {filter} from 'rxjs/operators';
import {NAVBAR_LINKS} from '../../../constants/general';
import {AuthService} from '../../../services/auth.service';
import {GetAuthUserPipe} from '../../../../shared/pipes/get-auth-user.pipe';
import {GetNavbarLinksBasedOnUserRolePipe} from '../../../../shared/pipes/get-navbar-links-based-on-user-role.pipe';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  routerUrl;
  navbarLinks;
  authUser;

  @Output() toggleSidebar = new EventEmitter();

  constructor(
    public router: Router,
    public auth: AuthService,
    private getAuthUser: GetAuthUserPipe,
    private getNavbarLinks: GetNavbarLinksBasedOnUserRolePipe
  ) {
    router.events.pipe(
      filter(e => e instanceof NavigationEnd),
    ).subscribe((params: NavigationEnd) => {
      this.routerUrl = params.url;
    });
  }

  ngOnInit(): void {
    this.authUser = this.getAuthUser.transform();
    if (this.auth.loggedIn()) {
      this.navbarLinks = this.getNavbarLinks.transform(NAVBAR_LINKS, this.authUser);
    } else {
      this.navbarLinks = NAVBAR_LINKS;
    }


  }

  openAside() {
    this.toggleSidebar.emit();
  }

  checkIfDashboardPage() {
    return /admin|companies/.test(this.routerUrl);
  }

  goToLoginPage() {
    if (!this.auth.loggedIn()) {
      this.router.navigate(['auth/login']);
    }
  }

}
