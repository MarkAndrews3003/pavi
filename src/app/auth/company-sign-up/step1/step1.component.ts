import {Component, Input, OnInit} from '@angular/core';
import {AbstractControl, FormGroup} from '@angular/forms';
import {INDUSTRY_LIST} from '../../../core/constants/industries';
import {COUNTRY_LIST} from '../../../core/constants/countries';

@Component({
  selector: 'app-step1',
  templateUrl: './step1.component.html',
  styleUrls: ['./step1.component.css']
})
export class Step1Component implements OnInit {
  @Input('group') companyInfoFormGroup: FormGroup;
  industries = INDUSTRY_LIST;
  countries = COUNTRY_LIST;
  isSubmitted = false;

  constructor() {
  }

  ngOnInit(): void {
  }

  changeCountry(e) {
    this.companyInfoFormGroup.patchValue({country: e.target.value});
  }

  changeIndustry(e) {
    this.companyInfoFormGroup.patchValue({industry: e.target.value});
  }

  submit() {
    this.isSubmitted = true;
  }

  get companyCtrl(): AbstractControl {
    return this.companyInfoFormGroup.get('name');
  }

  get industryCtrl(): AbstractControl {
    return this.companyInfoFormGroup.get('industry');
  }

  get countryCtrl(): AbstractControl {
    return this.companyInfoFormGroup.get('country');
  }

}
