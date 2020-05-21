import {Component, OnInit} from '@angular/core';
import {SaveWorkExperienceDialogComponent} from '../../../../../core/components/dialogs/save-work-experience-dialog/save-work-experience-dialog.component';
import {MatDialog} from '@angular/material/dialog';

@Component({
  selector: 'app-work-experience',
  templateUrl: './work-experience.component.html',
  styleUrls: ['./work-experience.component.css']
})
export class WorkExperienceComponent implements OnInit {
  showingEditDeleteBtns = false;

  constructor(private matDialog: MatDialog) {
  }

  ngOnInit(): void {
  }


  addWorkExperience() {
    this.matDialog.open(SaveWorkExperienceDialogComponent).afterClosed().subscribe(dt => {

    });
  }

  showEditDeleteBtns() {
    this.showingEditDeleteBtns = !this.showingEditDeleteBtns;
  }

  showEditDialog() {
    this.matDialog.open(SaveWorkExperienceDialogComponent).afterClosed().subscribe(dt => {

    });
  }

}
