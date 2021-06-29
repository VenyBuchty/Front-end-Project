import { Component, OnInit } from '@angular/core';
import AOS from 'aos';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    AOS.init();
  }

}
