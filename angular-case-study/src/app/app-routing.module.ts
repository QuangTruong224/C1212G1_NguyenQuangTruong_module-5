import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {CustomerListComponent} from './customer-list/customer-list.component';
import {CustomerCreateComponent} from './customer-create/customer-create.component';
import {CommonModule} from '@angular/common';
import {HomeComponent} from './home/home.component';
import {CustomerEditComponent} from './customer-edit/customer-edit.component';
import {FacilityListComponent} from './facility-list/facility-list.component';
import {FacilityCreateComponent} from './facility-create/facility-create.component';
import {FacilityEditComponent} from './facility-edit/facility-edit.component';
import {ContractListComponent} from './contract-list/contract-list.component';
import {ContractCreateComponent} from './contract-create/contract-create.component';
import {ContractEditComponent} from './contract-edit/contract-edit.component';


const routes: Routes = [
  {path: '', pathMatch: 'full', redirectTo: 'home'},
  {path: 'home', component: HomeComponent},
    {path: 'customer-list', component: CustomerListComponent},
  {path: 'customer-create', component: CustomerCreateComponent},
  {path: 'customer-edit', component: CustomerEditComponent},
  {path: 'facility-list', component: FacilityListComponent},
  {path: 'facility-create', component: FacilityCreateComponent},
  {path: 'facility-edit', component: FacilityEditComponent},
  {path: 'contract-list', component: ContractListComponent},
  {path: 'contract-create', component: ContractCreateComponent},
  {path: 'contract-edit', component: ContractEditComponent}

];

@NgModule({
  declarations: [],
  imports: [CommonModule
    , RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
