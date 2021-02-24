import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService} from 'src/app/user.service';
@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {
  newuser: FormGroup;
  constructor(
    private router: Router,
    private fb: FormBuilder,
    private userservice: UserService,
  ) {
    this.newuser = this.fb.group({
      username: ['deva', Validators.required],
      mobile: ['234567890', [Validators.required, Validators.min(10)]],
      email: ['devendranvemula@gmail.com', Validators.email],
      usertype: ['', Validators.required],
      password: ['7457', Validators.required],
    });
  }

  ngOnInit(): void {

  }
  handlesubmit(): any {
    const details = this.newuser.value;
    this.userservice.addUerDetails(details);
    this.router.navigate(['users']);
    // console.log(details);
  }
}
