import { stringify } from '@angular/compiler/src/util';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CustomersService } from 'src/app/customers.service';
import { v4 as uuidv4 } from 'uuid';

@Component({
  selector: 'app-add-customers',
  templateUrl: './add-customers.component.html',
  styleUrls: ['./add-customers.component.css']
})
export class AddCustomersComponent implements OnInit {
  newcustomer: FormGroup;
  constructor(
    private router: Router,
    private fb: FormBuilder,
    private customersService: CustomersService,
  ) {
    this.newcustomer = this.fb.group({
      customerName: ['deva', Validators.required],
      mobile: ['1234567890', [Validators.required, Validators.minLength(10)]],
      email: ['devendranvemula@gmail.com'],
      milkprice: ['0', [Validators.required, Validators.min(0)]],
      curdprice: ['0', [Validators.required, Validators.min(0)]],
      doorNumber: ['123'],
      place: ['srk', Validators.required]
    });
  }

  ngOnInit(): void {
  }

  handlesubmit(): any {
    const data = this.newcustomer.value;
    data.id = uuidv4();
    this.customersService.addCustomerDetails(data);
    this.router.navigate(['/customers']);
  }

}
