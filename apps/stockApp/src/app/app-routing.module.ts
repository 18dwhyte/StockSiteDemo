import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormComponent } from './form/form.component';
import { IndexPageComponent } from './index-page/index-page.component';
import { ProfileComponent } from './profile/profile.component';
import { SignupComponent } from './signup/signup.component';
import { StockindexComponent } from './stockindex/stockindex.component';
const routes: Routes = [
  {path: 'login', component: FormComponent},
  {path:'', component:IndexPageComponent},
  {path:'signup', component: SignupComponent},
  {path:'stock', component: StockindexComponent},
  {path:'profile', component: ProfileComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes),],
  exports: [RouterModule]
})
export class AppRoutingModule { 
}
