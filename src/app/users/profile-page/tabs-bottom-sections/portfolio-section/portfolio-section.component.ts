import { Component, OnInit } from '@angular/core';
import {SaveWorkExperienceDialogComponent} from '../../../../core/components/dialogs/save-work-experience-dialog/save-work-experience-dialog.component';
import {MatDialog} from '@angular/material/dialog';

@Component({
  selector: 'app-portfolio-section',
  templateUrl: './portfolio-section.component.html',
  styleUrls: ['./portfolio-section.component.css']
})
export class PortfolioSectionComponent implements OnInit {
  showingEditDeleteBtns = false;
  constructor(
    private matDialog: MatDialog
  ) { }

  ngOnInit(): void {
  }


  addWorkExperience() {
    this.matDialog.open(SaveWorkExperienceDialogComponent).afterClosed().subscribe(dt => {

    });
  }

  showEditDeleteBtns() {
    this.showingEditDeleteBtns = true;
  }
}
