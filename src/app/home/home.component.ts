import { Component, OnInit } from '@angular/core';
import { dataService } from '../shared/data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  providers: [dataService]
})
export class HomeComponent implements OnInit {

  siteData = [];

  constructor(private dataService: dataService) {}

  ngOnInit() {
    this.siteData = this.dataService.siteData;
  }

}
