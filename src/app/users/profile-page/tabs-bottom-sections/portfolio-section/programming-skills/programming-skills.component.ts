import {Component, OnInit} from '@angular/core';
import {SaveEducationCertificationInfoDialogComponent} from '../../../../../core/components/dialogs/save-education-certification-info-dialog/save-education-certification-info-dialog.component';
import {MatDialog} from '@angular/material/dialog';
import {SaveProgrammingSkillsDialogComponent} from '../../../../../core/components/dialogs/save-programming-skills-dialog/save-programming-skills-dialog.component';

@Component({
  selector: 'app-programming-skills',
  templateUrl: './programming-skills.component.html',
  styleUrls: ['./programming-skills.component.css']
})
export class ProgrammingSkillsComponent implements OnInit {
  showingEditDeleteBtns = false;

  constructor(
    private matDialog: MatDialog
  ) {
  }

  ngOnInit(): void {
  }


  addProgrammingSkills() {
    this.matDialog.open(SaveProgrammingSkillsDialogComponent).afterClosed().subscribe(dt => {

    });
  }

  showEditDeleteBtns() {
    this.showingEditDeleteBtns = !this.showingEditDeleteBtns;
  }

  showEditDialog() {
    this.matDialog.open(SaveProgrammingSkillsDialogComponent).afterClosed().subscribe(dt => {

    });
  }
}
