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
  myProductData:any = {}

  myName = "";
  myImage = "";
  myDescription = "";
  myPrice = "";

  constructor(public router:Router,
              private route: ActivatedRoute,
              private dataService: dataService) { }


  ngOnInit(): void {
    this.myID = this.route.snapshot.params['productID'];
    this.siteData = this.dataService.siteData;
    this.myProductData = this.siteData[this.myID - 1];

    this.myName = this.myProductData.name;
    this.myImage = this.myProductData.imageUrl;
    this.myPrice = this.myProductData.price;
    this.myDescription = this.myProductData.description;

    console.log(this.siteData[this.myID - 1]);
  }

}
