import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SalesdataService {
  // requiredSales: any;
  salesData: any[] = [];
  // key1 = 'REQUIREDSALES';
  key = 'SALESDATA';
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


}
