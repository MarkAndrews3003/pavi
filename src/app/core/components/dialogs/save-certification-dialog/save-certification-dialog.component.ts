import {Component, Inject, OnInit} from '@angular/core';
import {FormArray, FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ProfileService} from '../../../services/profile.service';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';

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
    private dialog: MatDialogRef<SaveCertificationDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    this.certificationForm = this.fb.array([
      this.fb.group({
        name: ['', Validators.required],
        description: ['', Validators.required],
        issued_by: ['', Validators.required],
        start_year: ['', Validators.required],
        end_year: ['', Validators.required]
      })
    ]);

    this.edit = !!data;
    if (data) {
      this.editData = data;
      this.certificationItems[0].patchValue(data);
    }
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
    const formValue = this.certificationForm.value;
    if (!this.edit) {
      this.profileService.addCertification(formValue).subscribe(() => {
        this.dialog.close();
      });
    } else {
      formValue[0].index = this.editData.index;
      this.profileService.updateCertifications(formValue[0]).subscribe(() => {
        this.dialog.close();
      });
    }
  }

  get certificationItems() {
    return this.certificationForm.controls;
  }

}
