import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { promise } from 'protractor';
import { UserService } from 'src/app/user.service';
@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.css']
})
export class EditUserComponent implements OnInit {
  edituser: FormGroup;
  userList = this.userService.users;
  userData: any;
  newUserData: any;
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private fb: FormBuilder,
    private userService: UserService,
  ) {
    this.edituser = this.fb.group({
      username: ['', Validators.required],
      mobile: ['', [Validators.required, Validators.minLength(10)]],
      email: ['', Validators.email],
      usertype: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  ngOnInit(): void {
    this.getUserDetails();
  }

  private async getUserDetails(): Promise<void> {
    try {
      this.userData = this.userList.find((user: any) =>
        user.id === this.route.snapshot.paramMap.get('id'));
      // console.log(this.userData);

      this.edituser.setValue({
        username: this.userData.username,
        mobile: this.userData.mobile,
        email: this.userData.email,
        usertype: this.userData.usertype,
        password: this.userData.password,
      });
    }
    catch (error) {
      console.log(error);
      window.alert('something went wrong');
      this.router.navigate(['/users']);
    }
  }

  handleSubmit(): any {
    this.newUserData = this.edituser.value;
    Object.assign(this.userData, this.newUserData);
    this.userService.updateUserDetails(this.userList);
    // console.log(this.userList);
    this.router.navigate(['/users']);
  }

}
