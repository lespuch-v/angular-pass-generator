import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainPassComponent } from './main-pass/main-pass.component';
import { MainPassOptionsComponent } from './main-pass-options/main-pass-options.component';
import { PassIndicatorComponent } from './pass-indicator/pass-indicator.component';
import {FormsModule} from "@angular/forms";

@NgModule({
  declarations: [
    AppComponent,
    MainPassComponent,
    MainPassOptionsComponent,
    PassIndicatorComponent
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        FormsModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
