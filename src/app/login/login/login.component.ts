import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginform: FormGroup;
  constructor(
    private router: Router,
    private fb: FormBuilder,
    private userService: UserService,
  ) {
    this.loginform = this.fb.group({
      mobileNumber: ['', [Validators.required, Validators.minLength(10)]],
      password: ['', Validators.required],
    })
  }

  ngOnInit(): void {
  }

  handleSubmit(): any {
    const userlist = this.userService.users;
    console.log(userlist);
      
  }
}
