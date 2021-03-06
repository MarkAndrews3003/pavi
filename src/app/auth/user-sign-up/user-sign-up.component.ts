import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {AbstractControl, FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {AuthService} from '../../core/services/auth.service';
import {patternValidator} from '../../core/helpers/pattern-validator';
import {
  API_URL,
  DATE_ONLY_PATTERN,
  EMAIL_PATTERN,
  NO_SPACE_PATTERN,
  TEXT_ONLY_PATTERN
} from '../../core/constants/general';
import {passwordConfirmation} from '../../core/helpers/password-confirmation';
import {COUNTRY_LIST} from '../../core/constants/countries';

@Component({
  selector: 'app-user-sign-up',
  templateUrl: './user-sign-up.component.html',
  styleUrls: ['./user-sign-up.component.css']
})
export class UserSignUpComponent implements OnInit {

  userRegisterForm: FormGroup;
  isSubmitted = false;
  passwordsMatch = true;
  maxBirthdayDate = new Date(2009, 11, 31);
  countries = COUNTRY_LIST;

  constructor(
    public router: Router,
    private fb: FormBuilder,
    public auth: AuthService
  ) {
    this.userRegisterForm = this.fb.group({
        email: new FormControl(null, {
          validators: [Validators.required, patternValidator(EMAIL_PATTERN)]
        }),
        password: ['', [Validators.required, Validators.minLength(5), Validators.maxLength(15), patternValidator(NO_SPACE_PATTERN)]],
        confirm_password: ['', Validators.required],
        birthday: ['', [Validators.required]], // patternValidator(DATE_ONLY_PATTERN)
        first_name: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(15), patternValidator(TEXT_ONLY_PATTERN)]],
        last_name: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(15), patternValidator(TEXT_ONLY_PATTERN)]],
        gender: ['male', Validators.required],
        country: ['', Validators.required],
        agreed: ['', Validators.required],

      },
    );
  }

  ngOnInit(): void {
  }

  register() {
    this.isSubmitted = true;
    // console.log(this.userRegisterForm.value)
    // console.log(this.userRegisterForm.valid)
    if (this.userRegisterForm.valid) {
      this.auth.register(this.userRegisterForm.value).subscribe((dt: any) => {
        this.router.navigate(['/']);
        localStorage.setItem('token', dt.token);
      });
    }
  }

  agreeTerms(e) {
    const agreed = e.checked ? 'yes' : '';
    this.userRegisterForm.patchValue({agreed});
  }

  comparePasswords() {
    this.passwordsMatch = this.pass.value === this.confirmPass.value;
  }

  getGoogleAuthUrl() {
    return `${API_URL}auth/google`;
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

  async goToPage(url) {
    await this.router.navigate([url]);
  }

}
