import {Component, Input, OnInit} from '@angular/core';
import {FormGroup} from '@angular/forms';
import {INDUSTRY_LIST} from '../../../core/constants/industries';

@Component({
  selector: 'app-step1',
  templateUrl: './step1.component.html',
  styleUrls: ['./step1.component.css']
})
export class Step1Component implements OnInit {
  @Input('group') companyInfoFormGroup: FormGroup;
  industries = INDUSTRY_LIST;

  constructor() {
  }

  ngOnInit(): void {
  }

  changeCountry(e) {
    console.log(e.target.value)
    this.companyInfoFormGroup.patchValue({country: e.target.value});
  }

}
