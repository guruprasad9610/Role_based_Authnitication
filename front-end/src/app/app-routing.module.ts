import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { FormsModule } from '@angular/forms';
import { HttpClientModule } from "@angular/common/http";

import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';
import { NavbarComponent } from "./navbar/navbar.component";
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component:LoginComponent},
  { path:'signup', component:SignupComponent},

  { path: '', component:NavbarComponent,
    children : 
    [
      { path: "home", component:HomeComponent},
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: 
  [
    BrowserModule,
    RouterModule,
    FormsModule,
    HttpClientModule
    
  ]
})
export class AppRoutingModule { }
