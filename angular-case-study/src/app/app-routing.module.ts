import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {CommonModule} from '@angular/common';
import {HomeComponent} from './home/home.component';


const routes: Routes = [
  {path: '', pathMatch: 'full', redirectTo: 'home'},
  {path: 'home', component: HomeComponent},
  {path: 'customer', loadChildren: () => import('./customer-manager/customer.module').then(module => module.CustomerModule)},
  {path: 'contract', loadChildren: () => import('./contract-manager/contract.module').then(module => module.ContractModule)},
  {path: 'facility', loadChildren: () => import('./facility-manager/facility.module').then(module => module.FacilityModule)}
];

@NgModule({
  declarations: [],
  imports: [CommonModule
    , RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
