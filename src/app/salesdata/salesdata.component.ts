import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CustomersService } from '../customers.service';

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

}
