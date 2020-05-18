import {Component, OnInit} from '@angular/core';
import {Data, NavigationEnd, Router} from '@angular/router';
import {filter} from 'rxjs/operators';
import {NAVBAR_LINKS} from '../../../constants/general';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  routerUrl;
  navbarLinks = NAVBAR_LINKS;

  constructor(
    public router: Router
  ) {
  }

  ngOnInit(): void {
    this.router.events
      .pipe(
        filter(event => event instanceof NavigationEnd)
      )
      .subscribe((dt: Data) => {
        console.log(dt)
        this.routerUrl = dt.url;
        console.log(this.routerUrl)
      });
  }

}
