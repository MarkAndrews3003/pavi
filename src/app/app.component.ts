import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {map} from 'rxjs/operators';
import jwtDecode from 'jwt-decode';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'pavi';

  constructor(
    public router: Router,
    private route: ActivatedRoute
  ) {

  }

  ngOnInit(): void {

    this.router.events.pipe(map(() => {
      let child = this.route.firstChild;
      while (child) {
        if (child.firstChild) {
          child = child.firstChild;
        } else if (child.snapshot.data) {
          return child.snapshot;
        } else {
          return null;
        }
      }
      return null;
    })).subscribe(data => {
      if (data) {
        const token = data.queryParams.token;
        if (token) {
          localStorage.setItem('token', token);
        }
      }
    });
  }
}
