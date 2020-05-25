import {Component, OnInit} from '@angular/core';
import {FormArray, FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ProfileService} from '../../../services/profile.service';

@Component({
  selector: 'app-save-education-dialog',
  templateUrl: './save-education-dialog.component.html',
  styleUrls: ['./save-education-dialog.component.css']
})
export class SaveEducationDialogComponent implements OnInit {

  educationForm: FormArray;

  constructor(
    private fb: FormBuilder,
    private profileService: ProfileService
  ) {
    this.educationForm = this.fb.array([
      this.fb.group({
        college: ['', Validators.required],
        degree: ['', Validators.required],
        speciality: ['', Validators.required],
        start_year: ['', Validators.required],
        end_year: ['', Validators.required]
      })
    ]);
  }

  ngOnInit(): void {
  }

  saveEducation() {
    this.profileService.addEducation(this.educationForm.value).subscribe(dt => {

    });
  }

  get educationItems() {
    return this.educationForm.controls;
  }

}
