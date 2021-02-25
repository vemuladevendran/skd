import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CustomersService {
  customerlist: any[] = this.customers || [];
  key = 'CUSTOMER_DATA';
  constructor() { }

  addCustomerDetails(data: any): any {
    this.customerlist.push(data);
    localStorage.setItem(this.key, JSON.stringify(this.customerlist));
  }

  get customers(): any {
    const data: any = localStorage.getItem(this.key);
    return JSON.parse(data);
  }
}

