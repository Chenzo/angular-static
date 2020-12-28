import { Component } from '@angular/core';
import { dataService } from './shared/data.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [dataService]
})
export class AppComponent {
  title = 'angular-static';
  siteData = [];

  constructor(private dataService: dataService) {}


  ngOnInit() {
    this.siteData = this.dataService.siteData;
  }
}
