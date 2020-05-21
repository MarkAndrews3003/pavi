import {Component, OnInit} from '@angular/core';
import {SaveEducationDialogComponent} from '../../../../../core/components/dialogs/save-education-dialog/save-education-dialog.component';
import {MatDialog} from '@angular/material/dialog';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css']
})
export class EducationComponent implements OnInit {
  showingEditDeleteBtns = false;
  constructor(
    private matDialog: MatDialog
  ) {
  }

  ngOnInit(): void {
  }

  addEducationInfo() {
    this.matDialog.open(SaveEducationDialogComponent).afterClosed().subscribe(dt => {

    });
  }

  showEditDeleteBtns() {
    this.showingEditDeleteBtns = !this.showingEditDeleteBtns;
  }

  showEditDialog() {
    this.matDialog.open(SaveEducationDialogComponent).afterClosed().subscribe(dt => {

    });
  }

}
