import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { CustomerListComponent } from './customer-list/customer-list.component';
import { CustomerCreateComponent } from './customer-create/customer-create.component';
import { FacilityListComponent } from './facility-list/facility-list.component';
import { FacilityCreateComponent } from './facility-create/facility-create.component';
import { ContractListComponent } from './contract-list/contract-list.component';
import { CustomerEditComponent } from './customer-edit/customer-edit.component';
import { FacilityEditComponent } from './facility-edit/facility-edit.component';
import { HomeComponent } from './home/home.component';
import { ContractCreateComponent } from './contract-create/contract-create.component';
import { ContractEditComponent } from './contract-edit/contract-edit.component';

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
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
