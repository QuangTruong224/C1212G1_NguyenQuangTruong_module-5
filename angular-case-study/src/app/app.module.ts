import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { CustomerListComponent } from './customer-list/customer-list.component';
import { CustomerCreateComponent } from './customer-create/customer-create.component';
import { ServiceListComponent } from './facility-list/service-list.component';
import { ServiceCreateComponent } from './facility-create/service-create.component';
import { ContractListComponent } from './contract-list/contract-list.component';
import { CustomerEditComponent } from './customer-edit/customer-edit.component';
import { ServiceEditComponent } from './facility-edit/service-edit.component';
import { HomeComponent } from './home/home.component';
import { ContractCreateComponent } from './contract-create/contract-create.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    CustomerListComponent,
    CustomerCreateComponent,
    ServiceListComponent,
    ServiceCreateComponent,
    ContractListComponent,
    CustomerEditComponent,
    ServiceEditComponent,
    HomeComponent,
    ContractCreateComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
