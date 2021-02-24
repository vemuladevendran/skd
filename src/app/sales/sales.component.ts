import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { CustomersService } from '../customers.service';


@Component({
  selector: 'app-sales',
  templateUrl: './sales.component.html',
  styleUrls: ['./sales.component.css']
})
export class SalesComponent implements OnInit {
  data = '';
  salesform: FormGroup;
  customerdata = this.customersService.customerlist;
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
        unitPrice: [1, [Validators.required, Validators.min(0)]]
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
    const customer = this.customerdata.find(c => c.customerName === event.value);
    this.salesform.get('milkk')?.get('unitPrice')?.setValue(customer?.milkprice);
    this.salesform.get('curd')?.get('unitPrice')?.setValue(customer?.curdprice);
  }

  handlesubmit(): any {
    this.data = this.salesform.value;
  }

}
