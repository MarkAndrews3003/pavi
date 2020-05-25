import {Component, OnInit} from '@angular/core';
import {SaveWorkExperienceDialogComponent} from '../../../../../core/components/dialogs/save-work-experience-dialog/save-work-experience-dialog.component';
import {MatDialog} from '@angular/material/dialog';
import {ProfileService} from '../../../../../core/services/profile.service';

@Component({
  selector: 'app-work-experience',
  templateUrl: './work-experience.component.html',
  styleUrls: ['./work-experience.component.css']
})
export class WorkExperienceComponent implements OnInit {
  showingEditDeleteBtns = false;

  constructor(
    private matDialog: MatDialog,
    private profileService: ProfileService
  ) {
  }

  ngOnInit(): void {
    this.getWorkExperience();
  }

  getWorkExperience() {
    this.profileService.getWorkExperience({}).subscribe(dt => {

    });
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
