import {Component, Inject, OnInit} from '@angular/core';
import {FormArray, FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ProfileService} from '../../../services/profile.service';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';

@Component({
  selector: 'app-save-work-experience-dialog',
  templateUrl: './save-work-experience-dialog.component.html',
  styleUrls: ['./save-work-experience-dialog.component.css']
})
export class SaveWorkExperienceDialogComponent implements OnInit {

  workExperienceForm: FormArray;
  edit;
  editData;

  constructor(
    private fb: FormBuilder,
    private profileService: ProfileService,
    private dialog: MatDialogRef<SaveWorkExperienceDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    this.workExperienceForm = this.fb.array([
      this.fb.group({
        company_name: ['', Validators.required],
        speciality: ['', Validators.required],
        start_year: ['', Validators.required],
        end_year: ['', Validators.required]
      })]);

    this.edit = !!data;

    if (data) {
      this.editData = data;
      this.experienceItems[0].patchValue(data);
    }
  }

  ngOnInit(): void {
  }

  saveExperience() {
    const formValue = this.workExperienceForm.value;

    if (!this.edit) {

      this.profileService.addWorkExperience(formValue).subscribe(() => {
        this.dialog.close();
      });

    } else {
      formValue[0].index = this.editData.index;
      this.profileService.updateWorkExperience(formValue[0]).subscribe(() => {
        this.dialog.close();
      });

    }
  }

  get experienceItems() {
    return this.workExperienceForm.controls;
  }

}
