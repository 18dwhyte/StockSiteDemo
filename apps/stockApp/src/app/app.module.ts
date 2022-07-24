import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormComponent } from './form/form.component';
import { IndexPageComponent } from './index-page/index-page.component';
import { SignupComponent } from './signup/signup.component';
import { StockindexComponent } from './stockindex/stockindex.component';
import {HttpClientModule} from '@angular/common/http'
import { FormsModule } from '@angular/forms';
import { ProfileComponent } from './profile/profile.component';


@NgModule({
  declarations: [
    AppComponent,
    FormComponent,
    IndexPageComponent,
    SignupComponent,
    StockindexComponent,
    ProfileComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
