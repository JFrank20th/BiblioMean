import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './home/header/header.component';
import { FooterComponent } from './home/footer/footer.component';
import { RegisterComponent } from './home/register/register.component';
import { LoginComponent } from './home/login/login.component';
import { ListRoleComponent } from './admin/list-role/list-role.component';
import { ListClientesComponent } from './admin/list-clientes/list-clientes.component';
import { RegisterRoleComponent } from './admin/register-role/register-role.component';
import { RegisterClientesComponent } from './admin/register-clientes/register-clientes.component';
import { UpdateRoleComponent } from './admin/update-role/update-role.component';
import { UpdateClientesComponent } from './admin/update-clientes/update-clientes.component';
import { RegisterBookComponent } from './admin/register-book/register-book.component';
import { ListBookComponent } from './admin/list-book/list-book.component';
import { RegisterProveedorComponent } from './admin/register-proveedor/register-proveedor.component';
import { ListProveedorComponent } from './admin/list-proveedor/list-proveedor.component';

import { ClientesService } from './services/clientes.service';
import { LibrosService } from './services/libros.service';
import { ProveedoresService } from './services/proveedores.service';
import { RoleService } from './services/role.service';
import { TokenInterceptorService } from './services/token-interceptor.service';

import { AuthGuard } from './guard/auth.guard';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    RegisterComponent,
    LoginComponent,
    ListRoleComponent,
    ListClientesComponent,
    RegisterRoleComponent,
    RegisterClientesComponent,
    UpdateRoleComponent,
    UpdateClientesComponent,
    RegisterBookComponent,
    ListBookComponent,
    RegisterProveedorComponent,
    ListProveedorComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [
    ClientesService,
    LibrosService,
    ProveedoresService,
    RoleService,
    TokenInterceptorService,
    AuthGuard,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
