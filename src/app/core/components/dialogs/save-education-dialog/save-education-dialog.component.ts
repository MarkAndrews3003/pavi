import {Component, Inject, OnInit} from '@angular/core';
import {FormArray, FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ProfileService} from '../../../services/profile.service';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';

@Component({
  selector: 'app-save-education-dialog',
  templateUrl: './save-education-dialog.component.html',
  styleUrls: ['./save-education-dialog.component.css']
})
export class SaveEducationDialogComponent implements OnInit {

  educationForm: FormArray;
  editData;
  edit;

  constructor(
    private fb: FormBuilder,
    private profileService: ProfileService,
    private dialog: MatDialogRef<SaveEducationDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    this.educationForm = this.fb.array([
      this.fb.group({
        institution: ['', Validators.required],
        degree: ['', Validators.required],
        speciality: ['', Validators.required],
        start_year: ['', Validators.required],
        end_year: ['', Validators.required]
      })
    ]);

    this.edit = !!data;
    if (data) {

      this.editData = data;
      this.educationItems[0].patchValue(data);
    }
  }

  ngOnInit(): void {
  }

  saveEducation() {
    const formValue = this.educationForm.value
    if (!this.edit) {
      this.profileService.addEducation(formValue).subscribe(() => {
        this.dialog.close();
      });
    } else {
      formValue[0].index = this.editData.index;
      this.profileService.updateEducationInfo(formValue[0]).subscribe(() => {
        this.dialog.close();
      });
    }
  }


  get educationItems() {
    return this.educationForm.controls;
  }

}
