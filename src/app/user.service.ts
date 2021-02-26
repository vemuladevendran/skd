import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  userlist: any[] = this.users || [];
  key = 'USER_DATA';

  constructor() { }

  addUerDetails(data: any): void {
    this.userlist.push(data);
    localStorage.setItem(this.key, JSON.stringify(this.userlist));
  }

  updateUserDetails(updateUserdata: any): any {
    localStorage.setItem(this.key, JSON.stringify(updateUserdata));
  }

  get users(): any {
    const data: any = localStorage.getItem(this.key);
    return JSON.parse(data);
  }
}
