import { Component, OnInit } from '@angular/core';
import AOS from 'aos';

@Component({
  selector: 'app-backend',
  templateUrl: './backend.component.html',
  styleUrls: ['./backend.component.css']
})
export class BackendComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    AOS.init();
  }
}
