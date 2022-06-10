import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {CustomerListComponent} from './customer-list/customer-list.component';
import {CustomerCreateComponent} from './customer-create/customer-create.component';
import {CommonModule} from '@angular/common';
import {HomeComponent} from './home/home.component';
import {CustomerEditComponent} from './customer-edit/customer-edit.component';
import {ServiceListComponent} from './facility-list/service-list.component';
import {ServiceCreateComponent} from './facility-create/service-create.component';
import {ServiceEditComponent} from './facility-edit/service-edit.component';
import {ContractListComponent} from './contract-list/contract-list.component';
import {ContractCreateComponent} from './contract-create/contract-create.component';


const routes: Routes = [
  {path: '', pathMatch: 'full', redirectTo: 'home'},
  {path: 'home', component: HomeComponent},
    {path: 'customer-list', component: CustomerListComponent},
  {path: 'customer-create', component: CustomerCreateComponent},
  {path: 'customer-edit', component: CustomerEditComponent},
  {path: 'facility-list', component: ServiceListComponent},
  {path: 'facility-create', component: ServiceCreateComponent},
  {path: 'facility-edit', component: ServiceEditComponent},
  {path: 'contract-list', component: ContractListComponent},
  {path: 'contract-create', component: ContractCreateComponent},

];

@NgModule({
  declarations: [],
  imports: [CommonModule
    , RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
