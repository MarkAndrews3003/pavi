import {Component, OnInit} from '@angular/core';
import {AbstractControl, FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {CompaniesService} from '../../core/services/companies.service';
import {Router} from '@angular/router';
import {ToastrService} from 'ngx-toastr';
import {patternValidator} from '../../core/helpers/pattern-validator';
import {EMAIL_PATTERN} from '../../core/constants/general';

@Component({
  selector: 'app-company-sign-up',
  templateUrl: './company-sign-up.component.html',
  styleUrls: ['./company-sign-up.component.css']
})
export class CompanySignUpComponent implements OnInit {
  companyRegistrationForm: FormGroup;
  currentStep = 1;
  isSubmitted = false;
  isLinear = true;
  companyInfo: FormGroup;
  accountInfo: FormGroup;
  contactDetails: FormGroup;


  constructor(
    private fb: FormBuilder,
    private companiesService: CompaniesService,
    public router: Router,
    private toastr: ToastrService
  ) {
  }

  ngOnInit() {
    this.initForm();
  }

  initForm() {
    this.companyInfo = this.fb.group({
      name: ['', Validators.required],
      industry: ['', Validators.required],
      country: ['', Validators.required],
    });
    this.accountInfo = this.fb.group({
      first_name: ['', Validators.required],
      last_name: ['', Validators.required],
      password: ['', Validators.required],
      gender: ['', Validators.required],
    });

    this.contactDetails = this.fb.group({
      phone: ['', Validators.required],
      email: new FormControl(null, {
        validators: [Validators.required, patternValidator(EMAIL_PATTERN)]
      }),
      address: ['', Validators.required],
    });

    this.companyRegistrationForm = this.fb.group({
      companyInfo: this.companyInfo,
      accountInfo: this.accountInfo,
      contactDetails: this.contactDetails
    });
  }

  stepChanged(e) {

  }

  registerCompany() {
    if (this.companyRegistrationForm.valid) {

      this.companiesService.register(this.companyRegistrationForm.getRawValue()).subscribe((dt: any) => {
        this.router.navigate(['/']);
        this.toastr.success('The company has been successfully registered and you are logged in');
        localStorage.setItem('token', dt.token);
      });
    }
  }


}
