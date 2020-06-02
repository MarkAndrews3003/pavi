import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-cv-portfolio-tab',
  templateUrl: './cv-portfolio-tab.component.html',
  styleUrls: ['./cv-portfolio-tab.component.css']
})
export class CvPortfolioTabComponent implements OnInit {

  editPosition = false;
  tempVal = 'Interior Designer';

  constructor() {
  }

  ngOnInit(): void {
  }

  changePosition() {
    this.editPosition = !this.editPosition;
  }

}
