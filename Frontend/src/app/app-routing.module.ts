import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ListBookComponent } from "./admin/list-book/list-book.component";
import { ListClientesComponent } from "./admin/list-clientes/list-clientes.component";
import { ListProveedorComponent } from "./admin/list-proveedor/list-proveedor.component";
import { ListRoleComponent } from "./admin/list-role/list-role.component";
import { RegisterBookComponent } from "./admin/register-book/register-book.component";
import { RegisterClientesComponent } from "./admin/register-clientes/register-clientes.component";
import { RegisterProveedorComponent } from "./admin/register-proveedor/register-proveedor.component";
import { RegisterRoleComponent } from "./admin/register-role/register-role.component";
import { UpdateClientesComponent } from "./admin/update-clientes/update-clientes.component";
import { UpdateRoleComponent } from "./admin/update-role/update-role.component";
import { ListBookComponent1 } from "./book/list-book/list-book.component";
import { LoginComponent } from "./home/login/login.component";
import { RegisterComponent } from "./home/register/register.component";


const routes: Routes = [
  {
    path:'',
    component: LoginComponent,
  },
  {
    path:'',
    component: ListBookComponent,
  },
  {
    path:'',
    component: ListClientesComponent,
  },
  {
    path:'',
    component: ListProveedorComponent,
  },
  {
    path:'',
    component: ListRoleComponent,
  },
  {
    path:'',
    component: RegisterBookComponent,
  },
  {
    path:'',
    component: RegisterClientesComponent,
  },
  {
    path:'',
    component: RegisterProveedorComponent,
  },
  {
    path:'',
    component: RegisterRoleComponent,
  },
  {
    path:'',
    component: UpdateClientesComponent,
  },
  {
    path:'',
    component: UpdateRoleComponent,
  },
  {
    path:'',
    component: ListBookComponent1,
  },
  {
    path:'',
    component: RegisterComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
