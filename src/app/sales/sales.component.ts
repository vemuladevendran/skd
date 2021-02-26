import { Component, OnInit, } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CustomersService } from '../customers.service';
import { formatDate } from '@angular/common';
import { SalesdataService } from '../salesdata.service';


@Component({
  selector: 'app-sales',
  templateUrl: './sales.component.html',
  styleUrls: ['./sales.component.css']
})
export class SalesComponent implements OnInit {
  data = '';
  salesform: FormGroup;
  customerdata = this.customersService.customers;
  constructor(
    private fb: FormBuilder,
    private customersService: CustomersService,
    private salesdataService: SalesdataService,
  ) {
    // salesform validators
    this.salesform = this.fb.group({
      customer: ['', Validators.required],
      salesdate: [new Date(), Validators.required],
      invoiceNumber: ['', Validators.required],
      milk: this.fb.group({
        liters: [0, [Validators.required, Validators.min(0)]],
        unitPrice: [0, [Validators.required, Validators.min(0)]]
      }),
      curd: this.fb.group({
        liters: [0, [Validators.required, Validators.min(0)]],
        unitPrice: [0, [Validators.required, Validators.min(0)]]
      }),
    });
  }


  ngOnInit(): void {

  }

  onCustomerSelectionChange(event: any): void {
    const customer = this.customerdata.find((c: any) => c.id === event.value);
    // const customer = this.customerdata.find(c => c.customerName === event.value);
    this.salesform.get('milk')?.get('unitPrice')?.setValue(customer?.milkprice);
    this.salesform.get('curd')?.get('unitPrice')?.setValue(customer?.curdprice);

  }



  handleSubmit(): any {
    this.data = this.salesform.value;
    this.salesdataService.customerSalesData(this.salesform.value);
    this.salesform.get('invoiceNumber')?.reset();
    this.salesform.get('invoiceNumber')?.setErrors(null);
    this.salesform.get('milk')?.get('liters')?.setValue(0);
    this.salesform.get('curd')?.get('liters')?.setValue(0);
  }

}
