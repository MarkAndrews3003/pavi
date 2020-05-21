import {Component, OnInit} from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import {SaveCertificationDialogComponent} from '../../../../../core/components/dialogs/save-certification-dialog/save-certification-dialog.component';

@Component({
  selector: 'app-certification',
  templateUrl: './certification.component.html',
  styleUrls: ['./certification.component.css']
})
export class CertificationComponent implements OnInit {
  showingEditDeleteBtns = false;

  constructor(
    private matDialog: MatDialog
  ) {
  }

  ngOnInit(): void {
  }

  addCertificationInfo() {
    this.matDialog.open(SaveCertificationDialogComponent).afterClosed().subscribe(dt => {

    });
  }

  showEditDeleteBtns() {
    this.showingEditDeleteBtns = !this.showingEditDeleteBtns;
  }

  showEditDialog() {
    this.matDialog.open(SaveCertificationDialogComponent).afterClosed().subscribe(dt => {

    });
  }

}
