import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UsersComponent } from './users.component';
import { AddUserComponent } from './add-user/add-user.component';
import { EditUserComponent } from './edit-user/edit-user.component';
import { ReactiveFormsModule } from '@angular/forms';
const routes: Routes = [
  {
    path: 'new',
    component: AddUserComponent,
  },
  {
    path: ':id/edit',
    component: EditUserComponent,
  },
  {
    path: '',
    component: UsersComponent,
  },
];

@NgModule({
  imports: [
    RouterModule.forChild(routes),
  ],
  exports: [RouterModule]
})
export class UsersRoutingModule { }
