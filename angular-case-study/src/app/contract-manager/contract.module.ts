import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {ContractRoutingModule} from './contract-routing.module';
import {ContractCreateComponent} from './contract-create/contract-create.component';
import {ContractEditComponent} from './contract-edit/contract-edit.component';
import {ContractListComponent} from './contract-list/contract-list.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';


@NgModule({
  declarations: [
    ContractListComponent,
    ContractCreateComponent,
    ContractEditComponent
  ],
  imports: [
    CommonModule,
    ContractRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class ContractModule {
}
