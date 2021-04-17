import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CustomersService {
  customerlist: any[] = this.customers || [];
  // customerName: any;
  key = 'CUSTOMER_DATA';
  constructor() {
    // console.log(this.customers)
   }

  addCustomerDetails(data: any): any {
    this.customerlist.push(data);
    localStorage.setItem(this.key, JSON.stringify(this.customerlist));
  }

  updateCustomerDetails(updatedCustomerList: any): void {
    localStorage.setItem(this.key, JSON.stringify(updatedCustomerList));
  }

  get customers(): any {
    const data: any = localStorage.getItem(this.key);
    return JSON.parse(data);
  }


  getCustomerName(id: any): any {
    return this.customers.find((name: any) => {
      return name.id === id;
    });
  }
}

