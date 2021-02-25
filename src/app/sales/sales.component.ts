import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CustomersService } from '../customers.service';


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
  ) {
    // salesform validators
    this.salesform = this.fb.group({
      customer: ['', Validators.required],
      salesdate: ['', Validators.required],
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
    const customer = this.customerdata.find((c: { customerName: any; }) => c.customerName === event.value);
    // const customer = this.customerdata.find(c => c.customerName === event.value);
    this.salesform.get('milk')?.get('unitPrice')?.setValue(customer?.milkprice);
    this.salesform.get('curd')?.get('unitPrice')?.setValue(customer?.curdprice);

  }



  handleSubmit(): any {
    this.data = this.salesform.value;
  }

}
