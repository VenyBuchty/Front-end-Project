import { Component, OnInit } from '@angular/core';
import AOS from 'aos';

@Component({
  selector: 'app-frontend',
  templateUrl: './frontend.component.html',
  styleUrls: ['./frontend.component.css']
})
export class FrontendComponent implements OnInit {

  constructor() { }

   ngOnInit() {
    AOS.init();
  }

}
