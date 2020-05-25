import {Component, OnInit} from '@angular/core';
import {FormBuilder} from '@angular/forms';

@Component({
  selector: 'app-save-programming-skills-dialog',
  templateUrl: './save-programming-skills-dialog.component.html',
  styleUrls: ['./save-programming-skills-dialog.component.css']
})
export class SaveProgrammingSkillsDialogComponent implements OnInit {

  skillsForm;

  constructor(
    private fb: FormBuilder
  ) {
    this.skillsForm = this.fb.group({
      name: '',
      rating: ''
    });
  }

  ngOnInit(): void {
  }

  get skills() {
    return this.skillsForm.controls;
  }

}
