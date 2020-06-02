import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-job-creation',
  templateUrl: './job-creation-stepper-form.component.html',
  styleUrls: ['./job-creation-stepper-form.component.css']
})
export class JobCreationStepperFormComponent implements OnInit {
  currentStep = 1;
  constructor() { }

  ngOnInit(): void {
  }

  stepChanged(e){

  }
}
