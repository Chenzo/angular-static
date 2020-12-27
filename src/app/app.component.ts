import { Component } from '@angular/core';
import * as coreData from '../assets/data.json';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular-static';
  coreData = coreData;
}
