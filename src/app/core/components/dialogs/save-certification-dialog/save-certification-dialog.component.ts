import {Component, Inject, OnInit} from '@angular/core';
import {FormArray, FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ProfileService} from '../../../services/profile.service';
import {MAT_DIALOG_DATA} from '@angular/material/dialog';

@Component({
  selector: 'app-save-certification-dialog',
  templateUrl: './save-certification-dialog.component.html',
  styleUrls: ['./save-certification-dialog.component.css']
})
export class SaveCertificationDialogComponent implements OnInit {
  certificationForm: FormArray;
  editData;
  edit;
  certifications = [];

  constructor(
    private fb: FormBuilder,
    private profileService: ProfileService,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    this.certificationForm = this.fb.array([
      this.fb.group({
        college: ['', Validators.required],
        degree: ['', Validators.required],
        speciality: ['', Validators.required],
        start_year: ['', Validators.required],
        end_year: ['', Validators.required]
      })
    ]);

    this.editData = data;
    this.edit = !!data;
  }

  ngOnInit(): void {
    this.getCertifications();
  }

  getCertifications() {
    this.profileService.getCertifications({}).subscribe((dt: any) => {
      this.certifications = dt;
    });
  }

  saveCertification() {
    if (!this.edit) {
      this.profileService.addEducation(this.certificationForm.value).subscribe();
    } else {

    }
  }

  get certificationItems() {
    return this.certificationForm.controls;
  }

}
