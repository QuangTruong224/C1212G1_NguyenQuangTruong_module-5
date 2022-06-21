import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {CommonModule} from '@angular/common';
import {HomeComponent} from './home/home.component';
import {ListComponent} from './list/list.component';
import {EditComponent} from './edit/edit.component';
import {CreateComponent} from './create/create.component';


const routes: Routes = [
  {path: '', pathMatch: 'full', redirectTo: 'home'},
  {path: 'home', component: HomeComponent},
  {path: 'carRegister-list', component: ListComponent},
  {path: 'edit/:id', component: EditComponent},
  {path: 'create', component: CreateComponent},
  // {path: 'car/api/add', component: CreateComponent}
];

@NgModule({
  declarations: [],
  imports: [CommonModule
    , RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
