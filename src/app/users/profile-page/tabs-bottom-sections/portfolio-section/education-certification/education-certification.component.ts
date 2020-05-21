import {Component, OnInit} from '@angular/core';
import {SaveWorkExperienceDialogComponent} from '../../../../../core/components/dialogs/save-work-experience-dialog/save-work-experience-dialog.component';
import {MatDialog} from '@angular/material/dialog';
import {SaveEducationCertificationInfoDialogComponent} from '../../../../../core/components/dialogs/save-education-certification-info-dialog/save-education-certification-info-dialog.component';

@Component({
  selector: 'app-education-certification',
  templateUrl: './education-certification.component.html',
  styleUrls: ['./education-certification.component.css']
})
export class EducationCertificationComponent implements OnInit {
  showingEditDeleteBtns = false;

  constructor(
    private matDialog: MatDialog
  ) {
  }

  ngOnInit(): void {
  }

  addEducationCertificationInfo() {
    this.matDialog.open(SaveEducationCertificationInfoDialogComponent).afterClosed().subscribe(dt => {

    });
  }

  showEditDeleteBtns() {
    this.showingEditDeleteBtns = !this.showingEditDeleteBtns;
  }

  showEditDialog() {
    this.matDialog.open(SaveEducationCertificationInfoDialogComponent).afterClosed().subscribe(dt => {

    });
  }

}
