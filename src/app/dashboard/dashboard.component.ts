import { AfterViewInit, Component, OnInit } from '@angular/core';
import { MatCarousel, MatCarouselComponent } from '@ngmodule/material-carousel';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  images = ['assets/image.1.jpg', 'assets/image.2.jpg', 'assets/image.3.jpg'];
  products = ['assets/sales-img.png', 'assets/salesdata-img.jpg', 'assets/customer-img.jpg', 'assets/users-img.png'];
  productsNames = ['SALES', 'SALESDATA', 'CUSTOMER', 'USERS'];
  constructor() { }

  ngOnInit(): void {
  }


}
