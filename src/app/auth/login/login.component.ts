import {Component, OnInit} from '@angular/core';
import {AbstractControl, FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {AuthService} from '../../core/services/auth.service';
import {Router} from '@angular/router';
import {patternValidator} from '../../core/helpers/pattern-validator';
import {API_URL, EMAIL_PATTERN} from '../../core/constants/general';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  isSubmitted = false;

  constructor(
    private fb: FormBuilder,
    private auth: AuthService,
    public router: Router
  ) {
  }

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      email: new FormControl(null, {
        validators: [Validators.required, patternValidator(EMAIL_PATTERN)]
      }),
      password: ['', Validators.required]
    });
  }

  login() {
    this.isSubmitted = true;
    if (this.loginForm.valid) {

      this.auth.login(this.loginForm.value).subscribe(async (dt: any) => {
        await this.router.navigate(['/']);
        localStorage.setItem('token', dt.token);
      });
    }
  }

  getGoogleAuthUrl() {
    return `${API_URL}auth/google`;
  }
  getFbAuthUrl() {
    return `${API_URL}auth/facebook`;
  }

  getTwitterAuthUrl() {
    return `${API_URL}auth/twitter`;
  }

  /**
   * E-mail field getter
   */
  get email(): AbstractControl {
    return this.loginForm.get('email');
  }

  /**
   * Password field getter
   */
  get pass(): AbstractControl {
    return this.loginForm.get('password');
  }

}
