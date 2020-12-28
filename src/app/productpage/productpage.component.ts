import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from  '@angular/router';
import { dataService } from '../shared/data.service';

@Component({
  selector: 'app-productpage',
  templateUrl: './productpage.component.html',
  styleUrls: ['./productpage.component.scss']
})
export class ProductpageComponent implements OnInit {

  siteData = [];
  myID = 123;

  constructor(public router:Router,
              private route: ActivatedRoute,
              private dataService: dataService) { }


  ngOnInit(): void {
    this.myID = this.route.params['productID'];
  }

}
