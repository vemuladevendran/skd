import { Component, OnInit } from '@angular/core';
import { Data } from '@angular/router';
import { UserService} from '../user.service';
@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  tabledata = this.userservice.users;
  constructor(
    private userservice: UserService,
   )
   { }

  ngOnInit(): void {
    console.log(this.tabledata);
  }

}
