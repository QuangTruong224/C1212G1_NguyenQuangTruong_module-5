import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { CustomerListComponent } from './customer-manager/customer-list/customer-list.component';
import { CustomerCreateComponent } from './customer-manager/customer-create/customer-create.component';
import { FacilityListComponent } from './facility-manager/facility-list/facility-list.component';
import { FacilityCreateComponent } from './facility-manager/facility-create/facility-create.component';
import { ContractListComponent } from './contract-manager/contract-list/contract-list.component';
import { CustomerEditComponent } from './customer-manager/customer-edit/customer-edit.component';
import { FacilityEditComponent } from './facility-manager/facility-edit/facility-edit.component';
import { HomeComponent } from './home/home.component';
import { ContractCreateComponent } from './contract-manager/contract-create/contract-create.component';
import { ContractEditComponent } from './contract-manager/contract-edit/contract-edit.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    CustomerListComponent,
    CustomerCreateComponent,
    FacilityListComponent,
    FacilityCreateComponent,
    ContractListComponent,
    CustomerEditComponent,
    FacilityEditComponent,
    HomeComponent,
    ContractCreateComponent,
    ContractEditComponent
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        FormsModule,
        ReactiveFormsModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
