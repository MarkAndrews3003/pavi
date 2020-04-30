import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FormGroup} from '@angular/forms';
import {COUNTRY_LIST} from '../../../core/constants/countries';

@Component({
  selector: 'app-step3',
  templateUrl: './step3.component.html',
  styleUrls: ['./step3.component.css']
})
export class Step3Component implements OnInit {
  @Input('group') companyDetailsFormGroup: FormGroup;
  @Output('registerCompany') register = new EventEmitter();
  countries = COUNTRY_LIST;

  constructor() {
  }

  ngOnInit(): void {
  }

  registerCompany() {
    this.register.emit();
  }
}
