import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

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
  ) {
    this.newcustomer = this.fb.group({
   customerName: ['deva', Validators.required],
   mobile: ['1234567890', [Validators.required, Validators.min(10)]],
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
console.log(this.newcustomer.value);
  }

}
