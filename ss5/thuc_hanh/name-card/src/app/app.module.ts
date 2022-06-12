import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {NameCardModule} from './name-card.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    NameCardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
