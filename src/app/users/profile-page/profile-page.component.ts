import {Component, OnInit} from '@angular/core';
import {AuthService} from '../../core/services/auth.service';
import {FormBuilder, FormGroup} from '@angular/forms';
import {Router} from '@angular/router';

@Component({
  selector: 'app-profile-page',
  templateUrl: './profile-page.component.html',
  styleUrls: ['./profile-page.component.css']
})
export class ProfilePageComponent implements OnInit {
  changePasswordForm: FormGroup;
  profileImgTextForm: FormGroup;
  coverImgForm: FormGroup;
  showChangePass = false;
  showProfileImgTextControls = false;

  constructor(
    public auth: AuthService,
    private fb: FormBuilder,
    public router: Router
  ) {
    this.changePasswordForm = this.fb.group({});
    this.profileImgTextForm = this.fb.group({});
    this.coverImgForm = this.fb.group({});
  }

  ngOnInit(): void {
  }

  showChangePassForm() {
    this.showChangePass = true;
  }

  toggleProfileImgText() {
    this.showProfileImgTextControls = !this.showProfileImgTextControls;
  }

}
