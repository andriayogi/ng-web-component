import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HelperModule } from '../modules/helper/index';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HelperModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
