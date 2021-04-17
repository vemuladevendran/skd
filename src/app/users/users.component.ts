import { Component, OnInit } from '@angular/core';
import { Data } from '@angular/router';
import { UserService } from '../user.service';
@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  tabledata = this.userservice.users;
  constructor(
    private userservice: UserService,
  ) { }

  ngOnInit(): void {
    // console.log(this.tabledata);
  }

  deleteUser(userDetails: any): any {
  //   const user = this.tabledata.find((id: any) => {
  //  const deleteuser = this.userservice.users.id === userDetails;
  //  localStorage.removeItem('deleteuser');
  //   });
  }

}
