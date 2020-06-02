import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-show-job',
  templateUrl: './show-job.component.html',
  styleUrls: ['./show-job.component.css']
})
export class ShowJobComponent implements OnInit {

  constructor(
    public router: Router
  ) {
  }

  ngOnInit(): void {
  }

}
