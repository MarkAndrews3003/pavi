import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ProfileService} from '../../../services/profile.service';

@Component({
  selector: 'app-save-work-experience-dialog',
  templateUrl: './save-work-experience-dialog.component.html',
  styleUrls: ['./save-work-experience-dialog.component.css']
})
export class SaveWorkExperienceDialogComponent implements OnInit {

  workExperienceForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private profileService: ProfileService
  ) {
    this.workExperienceForm = this.fb.group({
      company_name: ['', Validators.required],
      speciality: ['', Validators.required],
      start_year: ['', Validators.required],
      end_year: ['', Validators.required]
    });
  }

  ngOnInit(): void {
  }

  addExperience() {
    this.profileService.addWorkExperience(this.workExperienceForm.value).subscribe(dt => {

    });
  }

}
