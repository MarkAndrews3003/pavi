import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {AuthService} from '../../core/services/auth.service';

@Component({
  selector: 'app-user-sign-up',
  templateUrl: './user-sign-up.component.html',
  styleUrls: ['./user-sign-up.component.css']
})
export class UserSignUpComponent implements OnInit {

  userRegisterForm: FormGroup;

  constructor(
    public router: Router,
    private fb: FormBuilder,
    public auth: AuthService
  ) {
    this.userRegisterForm = this.fb.group({
      email: ['', Validators.required],
      password: ['', Validators.required],
      first_name: ['', Validators.required],
      last_name: ['', Validators.required],
      gender: ['', Validators.required],
      country: ['', Validators.required]
    });
  }

  ngOnInit(): void {
  }

  register() {
    this.auth.register(this.userRegisterForm.value).subscribe((dt: any) => {
      this.router.navigate(['/']);
      localStorage.setItem('token', dt.token);
    });
  }

}
