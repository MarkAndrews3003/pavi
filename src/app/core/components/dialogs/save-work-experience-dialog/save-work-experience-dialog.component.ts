import {Component, Inject, OnInit} from '@angular/core';
import {FormArray, FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ProfileService} from '../../../services/profile.service';
import {MAT_DIALOG_DATA} from '@angular/material/dialog';

@Component({
  selector: 'app-save-work-experience-dialog',
  templateUrl: './save-work-experience-dialog.component.html',
  styleUrls: ['./save-work-experience-dialog.component.css']
})
export class SaveWorkExperienceDialogComponent implements OnInit {

  workExperienceForm: FormArray;

  constructor(
    private fb: FormBuilder,
    private profileService: ProfileService,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    this.workExperienceForm = this.fb.array([
      this.fb.group({
        company_name: ['', Validators.required],
        speciality: ['', Validators.required],
        start_year: ['', Validators.required],
        end_year: ['', Validators.required]
      })]);

    this.experienceItems[0].patchValue(data);
  }

  ngOnInit(): void {
  }

  saveExperience() {
    this.profileService.addWorkExperience(this.workExperienceForm.value).subscribe(dt => {

    });
  }

  get experienceItems() {
    return this.workExperienceForm.controls;
  }

}
