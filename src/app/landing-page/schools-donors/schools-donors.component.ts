import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-schools-donors',
  templateUrl: './schools-donors.component.html',
  styleUrls: ['./schools-donors.component.css']
})
export class SchoolsDonorsComponent implements OnInit {

  title = 'My first AGM project';
  lat = 6.9271;
  lng = 79.8612;

  lat1 = 45.1516;
  lng1 = 10.0527;

  constructor() { }

  ngOnInit() {
  }

}
