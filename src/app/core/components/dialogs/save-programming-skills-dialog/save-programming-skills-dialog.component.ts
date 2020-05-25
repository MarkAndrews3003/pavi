import {Component, Inject, OnInit} from '@angular/core';
import {FormBuilder, Validators} from '@angular/forms';
import {MAT_DIALOG_DATA} from '@angular/material/dialog';

@Component({
  selector: 'app-save-programming-skills-dialog',
  templateUrl: './save-programming-skills-dialog.component.html',
  styleUrls: ['./save-programming-skills-dialog.component.css']
})
export class SaveProgrammingSkillsDialogComponent implements OnInit {

  skillsForm;

  constructor(
    private fb: FormBuilder,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {


    this.skillsForm = this.fb.array([
      this.fb.group({
        name: ['', Validators.required],
        rating: ['', Validators.required],
      })]);
  }

  ngOnInit(): void {
  }

  get skills() {
    return this.skillsForm.controls;
  }

}
