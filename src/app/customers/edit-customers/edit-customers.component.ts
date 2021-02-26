import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { promise } from 'protractor';
import { CustomersService } from 'src/app/customers.service';

@Component({
  selector: 'app-edit-customers',
  templateUrl: './edit-customers.component.html',
  styleUrls: ['./edit-customers.component.css']
})
export class EditCustomersComponent implements OnInit {
  editCustomer: FormGroup;
  customerData: any;
  newCustomerData: any;
  customerList = this.customersService.customers;
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private fb: FormBuilder,
    private customersService: CustomersService,
  ) {

    this.editCustomer = this.fb.group({
      customerName: ['', Validators.required],
      mobile: ['', [Validators.required, Validators.minLength(10)]],
      email: [''],
      milkprice: ['', [Validators.required, Validators.min(0)]],
      curdprice: ['', [Validators.required, Validators.min(0)]],
      doorNumber: [''],
      place: ['', Validators.required]
    });

  }

  ngOnInit(): void {
    this.getCustomerDetails();
  }

  private async getCustomerDetails(): Promise<void> {
    try {
      this.customerData = this.customerList.find((c: any) =>
        c.id === this.route.snapshot.paramMap.get('id')
      );
      this.editCustomer.setValue({
        customerName: this.customerData.customerName,
        mobile: this.customerData.mobile,
        email: this.customerData.email,
        milkprice: this.customerData.milkprice,
        curdprice: this.customerData.curdprice,
        doorNumber: this.customerData.doorNumber,
        place: this.customerData.place,
        // id: this.customerData.id,
      });
      // console.log(this.customerData);
    }
    catch (error) {
      console.log('something went wrong');
      window.alert('something went wrong');
      this.router.navigate(['/customers']);
    }
  }

  handleSubmit(): any {
    this.newCustomerData = this.editCustomer.value;
    Object.assign(this.customerData, this.newCustomerData);
    this.customersService.updateCustomerDetails(this.customerList);
    this.router.navigate(['/customers']);
  }

}
