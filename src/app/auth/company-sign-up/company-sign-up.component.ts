import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {CompaniesService} from '../../core/services/companies.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-company-sign-up',
  templateUrl: './company-sign-up.component.html',
  styleUrls: ['./company-sign-up.component.css']
})
export class CompanySignUpComponent implements OnInit {
  companyRegistrationForm: FormGroup;
  currentStep = 1;

  constructor(
    private fb: FormBuilder,
    private companiesService: CompaniesService,
    public router: Router
  ) {
  }

  ngOnInit(): void {
    this.initForm();
  }

  stepChanged(e) {

  }

  initForm() {
    this.companyRegistrationForm = this.fb.group({
      companyInfo:
        this.fb.group({
          name: ['', Validators.required],
          industry: ['', Validators.required],
        }),
      accountInfo:
        this.fb.group({
          first_name: ['', Validators.required],
          last_name: ['', Validators.required],
          role: ['', Validators.required],
          password: ['', Validators.required],
          confirm_pass: ['', Validators.required],
          gender: ['', Validators.required],

        }),
      contactDetails:
        this.fb.group({
          phone: ['', Validators.required],
          email: ['', Validators.required],
          address: ['', Validators.required],
          country: ['', Validators.required],
        }),
    });
  }

  registerCompany() {
    this.companiesService.register(this.companyRegistrationForm.getRawValue()).subscribe((dt: any) => {
      this.router.navigate(['/']);
      localStorage.setItem('token', dt.token);
    });
  }


  get companyInfoFormGroup() {
    return this.companyRegistrationForm.controls.companyInfo as FormGroup;
  }

  get accountInfoFormGroup() {
    return this.companyRegistrationForm.controls.accountInfo as FormGroup;
  }

  get companyDetailsFormGroup() {
    return this.companyRegistrationForm.controls.contactDetails as FormGroup;
  }

}
