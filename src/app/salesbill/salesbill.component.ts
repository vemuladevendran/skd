import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CustomersService } from '../customers.service';
import { SalesdataService } from '../salesdata.service';

@Component({
  selector: 'app-salesbill',
  templateUrl: './salesbill.component.html',
  styleUrls: ['./salesbill.component.css']
})
export class SalesbillComponent implements OnInit {
  searchResults: any;
  tablesalesdata: any;
  customerName: any;
  customerPlace: any;
  customerID: any;
  fromdate: any;
  todate: any;
  milkTotal: any;
  curdTotal: any;
  total: any;
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private salesdataServices: SalesdataService,
    private customerService: CustomersService,
  ) { }

  ngOnInit(): void {
    // this.tablesalesdata = this.salesdataSevices.customerSearchSales;
    // this.tablesalesdata = this.salesdataServices.getCustomerSearchResule();
    // console.log(this.tablesalesdata);
    this.getSalesData();
  }

  printTable(): void {
    window.print();
  }

  getSalesData(): any {
    this.customerID = this.route.snapshot.queryParamMap.get('customer');
    this.fromdate = this.route.snapshot.queryParamMap.get('from');
    this.todate = this.route.snapshot.queryParamMap.get('to');
    const data = this.salesdataServices.getSalesData();
    this.searchResults = data.filter(sales => {
      const isCustomerIdMatched = sales.customer === this.customerID;
      // console.log(this.customerID);
      const isBetweenDateRange = (new Date(sales.salesdate) >= new Date(this.fromdate)) &&
        (new Date(sales.salesdate) <= new Date(this.todate));
      return isCustomerIdMatched && isBetweenDateRange;
    });


    // console.log(this.customerService.getCustomerName(this.customerID));
    this.customerName = (this.customerService.getCustomerName(this.customerID)).customerName;
    this.customerPlace = (this.customerService.getCustomerName(this.customerID)).place;
    // this.salesdataServices.customerSearchResult(this.searchResults);
    // console.log(data);
    // console.log(this.searchResults);
  }

}
