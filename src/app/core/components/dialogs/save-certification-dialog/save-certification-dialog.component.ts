import {Component, OnInit} from '@angular/core';
import {FormArray, FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ProfileService} from '../../../services/profile.service';

@Component({
  selector: 'app-save-certification-dialog',
  templateUrl: './save-certification-dialog.component.html',
  styleUrls: ['./save-certification-dialog.component.css']
})
export class SaveCertificationDialogComponent implements OnInit {
  certificationForm: FormArray;

  constructor(
    private fb: FormBuilder,
    private profileService: ProfileService
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
  }

  ngOnInit(): void {

  }

  saveCertification() {
    this.profileService.addEducation(this.certificationForm.value).subscribe(dt => {

    });
  }

  get certificationItems() {
    return this.certificationForm.controls;
  }

}
