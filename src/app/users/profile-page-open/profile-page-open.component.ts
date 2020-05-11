import { Component, OnInit } from '@angular/core';
import {AuthService} from '../../core/services/auth.service';

@Component({
  selector: 'app-profile-page-open',
  templateUrl: './profile-page-open.component.html',
  styleUrls: ['./profile-page-open.component.css']
})
export class ProfilePageOpenComponent implements OnInit {

  constructor(
    public auth: AuthService
  ) { }

  ngOnInit(): void {
  }

}
