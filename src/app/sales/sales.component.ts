import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';


@Component({
  selector: 'app-sales',
  templateUrl: './sales.component.html',
  styleUrls: ['./sales.component.css']
})
export class SalesComponent implements OnInit {
  customers = ['deva', 'asd', 'vhhh'];
  salesform: FormGroup;
  data = '';
  constructor(
    private fb: FormBuilder,
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

  handlesubmit(): any {
    this.data = this.salesform.value;
  }

}
