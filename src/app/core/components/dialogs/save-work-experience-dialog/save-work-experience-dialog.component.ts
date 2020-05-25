import {Component, OnInit} from '@angular/core';
import {FormArray, FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ProfileService} from '../../../services/profile.service';

@Component({
  selector: 'app-save-work-experience-dialog',
  templateUrl: './save-work-experience-dialog.component.html',
  styleUrls: ['./save-work-experience-dialog.component.css']
})
export class SaveWorkExperienceDialogComponent implements OnInit {

  workExperienceForm: FormArray;

  constructor(
    private fb: FormBuilder,
    private profileService: ProfileService
  ) {
    this.workExperienceForm = this.fb.array([
      this.fb.group({
        company_name: ['', Validators.required],
        speciality: ['', Validators.required],
        start_year: ['', Validators.required],
        end_year: ['', Validators.required]
      })]);
  }

  ngOnInit(): void {
    console.log(this.workExperienceForm)
  }

  addExperience() {
    console.log(this.workExperienceForm.value)
    this.profileService.addWorkExperience(this.workExperienceForm.value).subscribe(dt => {

    });
  }

  get experienceItems() {
    return this.workExperienceForm;
  }

}
