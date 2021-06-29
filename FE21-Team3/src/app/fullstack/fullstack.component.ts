import { Component, OnInit } from '@angular/core';
import AOS from 'aos';

@Component({
  selector: 'app-fullstack',
  templateUrl: './fullstack.component.html',
  styleUrls: ['./fullstack.component.css']
})
export class FullstackComponent implements OnInit {

  constructor() { }

   ngOnInit() {
    AOS.init();
  }

}
