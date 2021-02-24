import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { CustomersService } from '../customers.service';

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.css']
})
export class CustomersComponent implements OnInit {
  tabledata = this.customersService.customerlist;
  constructor(
    private router: Router,
    private fb: FormBuilder,
    private customersService: CustomersService,
  ) {  }

  ngOnInit(): void {
  }

}
