import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CustomersService {
  customerlist: any[] = [];
  constructor() { }

  addCustomerDetails(data: any): any {
    this.customerlist.push(data);
  }
}

