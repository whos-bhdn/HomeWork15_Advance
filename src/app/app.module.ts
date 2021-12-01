import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { SearchPipe } from './hw15/search.pipe';
import { Hw15Component } from './hw15/hw15.component';
import { PhonePipePipe } from './hw15/phone-pipe.pipe';
import {FormsModule} from "@angular/forms";

@NgModule({
  declarations: [
    AppComponent,
    SearchPipe,
    Hw15Component,
    PhonePipePipe
  ],
    imports: [
        BrowserModule,
        FormsModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
