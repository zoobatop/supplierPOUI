import { Routes } from '@angular/router';
import { SupplierListComponent } from './supplier-list/supplier-list.component';
import { SupplierFormComponent } from './supplier-form/supplier-form.component';
import { ClientListComponent } from './client-list/client-list.component';
import { LoginComponent } from './login/login.component';

export const routes: Routes = [
  { path: 'client', component: ClientListComponent },
  { path: 'login', component: LoginComponent },
  { path: 'supplier', component: SupplierListComponent },
  { path: 'supplier/form', component: SupplierFormComponent }
];
