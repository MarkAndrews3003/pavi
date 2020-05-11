import {Component, OnInit} from '@angular/core';
import {AuthService} from '../../core/services/auth.service';
import {FormBuilder, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-profile-page',
  templateUrl: './profile-page.component.html',
  styleUrls: ['./profile-page.component.css']
})
export class ProfilePageComponent implements OnInit {
  changePasswordForm: FormGroup;
  showChangePass = false;

  constructor(
    public auth: AuthService,
    private fb: FormBuilder
  ) {
    this.changePasswordForm = this.fb.group({});
  }

  ngOnInit(): void {
  }

  showChangePassForm() {
    this.showChangePass = true;
  }

}
