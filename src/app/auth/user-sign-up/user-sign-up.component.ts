import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {AbstractControl, FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {AuthService} from '../../core/services/auth.service';
import {patternValidator} from '../../core/helpers/pattern-validator';
import {EMAIL_PATTERN} from '../../core/constants/general';
import {passwordConfirmation} from '../../core/helpers/password-confirmation';

@Component({
  selector: 'app-user-sign-up',
  templateUrl: './user-sign-up.component.html',
  styleUrls: ['./user-sign-up.component.css']
})
export class UserSignUpComponent implements OnInit {

  userRegisterForm: FormGroup;
  isSubmitted = false;
  passwordsMatch = true;

  constructor(
    public router: Router,
    private fb: FormBuilder,
    public auth: AuthService
  ) {
    this.userRegisterForm = this.fb.group({
      email: new FormControl(null, {
        validators: [Validators.required, patternValidator(EMAIL_PATTERN)]
      }),
      password: ['', Validators.required],
      confirm_password: ['', Validators.required],
      birthday: ['', Validators.required],
      first_name: ['', Validators.required],
      last_name: ['', Validators.required],
      gender: ['male', Validators.required],
      country: ['', Validators.required],
      agreed: ['', Validators.required],

    }, {validator: passwordConfirmation('password', 'confirm_password')});
  }

  ngOnInit(): void {
  }

  register() {
    this.isSubmitted = true;
    if (this.userRegisterForm.valid) {
      this.auth.register(this.userRegisterForm.value).subscribe((dt: any) => {
        this.router.navigate(['/']);
        localStorage.setItem('token', dt.token);
      });
    }
  }

  agreeTerms(e) {
    this.userRegisterForm.patchValue({agreed: e.checked});
  }

  comparePasswords() {
    this.passwordsMatch = this.pass.value === this.confirmPass.value;
  }

  /**
   * First name field control getter
   */
  get firstName() {
    return this.userRegisterForm.get(`first_name`);
  }

  /**
   * Last name field control getter
   */
  get lastName(): AbstractControl {
    return this.userRegisterForm.get(`last_name`);
  }

  /**
   * E-mail field getter
   */
  get email(): AbstractControl {
    return this.userRegisterForm.get('email');
  }

  /**
   * Password field getter
   */
  get pass(): AbstractControl {
    return this.userRegisterForm.get('password');
  }

  get confirmPass(): AbstractControl {
    return this.userRegisterForm.get('confirm_password');
  }

  get birthday(): AbstractControl {
    return this.userRegisterForm.get('birthday');
  }

}
