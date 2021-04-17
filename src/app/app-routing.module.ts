import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// tslint:disable-next-line: max-line-length
const routes: Routes = [
  {
  path: 'users',
  loadChildren: () => import('./users/users.module').then(m => m.UsersModule)
},
{
  path: 'customers',
  loadChildren: () => import('./customers/customers.module').then(m => m.CustomersModule)
},
{
  path: 'login',
  loadChildren: () => import('./login/login.module').then(m => m.LoginModule)
},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
