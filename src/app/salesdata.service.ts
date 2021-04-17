import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SalesdataService {
  // requiredSales: any;
  salesData: any[] = [];
  customerSearchSales: any;
  // key1 = 'REQUIREDSALES';
  key = 'SALES';
  key2 = 'SALESDATA';
  constructor() { }

  // requiredSalesData(data: any): any {
  //   // this.requiredSales.push(data);
  //   this.requiredSales = data;
  //   // localStorage.setItem(this.key1, JSON.stringify(this.requiredSales));
  // }

  customerSalesData(data: any): any {
    this.salesData.push(data);
    localStorage.setItem(this.key, JSON.stringify(this.salesData));
  }

  getSalesData(): any[] {
    const data: any = localStorage.getItem(this.key);
    return JSON.parse(data);
  }

  customerSearchResult(data: any): any {
    this.customerSearchSales = data;
    localStorage.setItem(this.key2, JSON.stringify(this. customerSearchSales));
  }

  getCustomerSearchResule(): any[] {
    const requiredSales: any = localStorage.getItem(this.key2);
    return JSON.parse(requiredSales);
  }



}
