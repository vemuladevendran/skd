import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  userlist: any[] = [];

  constructor() { }

  addUerDetails(data: any): void {
    this.userlist.push(data);
  }
}
