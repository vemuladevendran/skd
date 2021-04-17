import { query } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
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
    private router: Router,
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
    // console.log(this.userdata);
  }

  handleSubmit(): any {
    const {
      customer,
      salesdatadate: { from, to }
    } = this.salesdataform.value;
    this.router.navigate(['salesbill'], { queryParams: { customer, from, to } });


    // console.log(searchResults);
  }
}
