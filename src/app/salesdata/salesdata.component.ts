import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CustomersService } from '../customers.service';
import { SalesdataService } from '../salesdata.service';

@Component({
  selector: 'app-salesdata',
  templateUrl: './salesdata.component.html',
  styleUrls: ['./salesdata.component.css']
})
export class SalesdataComponent implements OnInit {
  salesdataform: FormGroup;
  // customers = ['brk', 'frfifj', 'ffj', 'jkkrhj'];
userdata = this.customersServices.customers;
  constructor(
    private fb: FormBuilder,
    private customersServices: CustomersService,
    private salesdataServices: SalesdataService,
  ) {
    this.salesdataform = this.fb.group({
   customer: ['', Validators.required],
   salesdatadate: this.fb.group({
     from: ['', Validators.required],
     to: ['', Validators.required],
   })
    });
  }

  ngOnInit(): void {
  }

  handleSubmit(): any {
    // this.salesdataServices.requiredSalesData(this.salesdataform.value);
    // console.log(this.salesdataform.value);
    const data = this.salesdataServices.getSalesData();
    const searchResults = data.filter(sales => {
      // console.dir(sales);
      const isCustomerIdMatched = sales.customer === this.salesdataform.value.customer;
      const { from, to } = this.salesdataform.value.salesdatadate;
      const isBetweenDateRange = (new Date(sales.salesdate) >= from) && (new Date(sales.salesdate) <= to);
      return isCustomerIdMatched && isBetweenDateRange;
    });

    console.log(searchResults);
  }
}
