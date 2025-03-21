import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { Error404Component } from './error404/error404.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { DataBindingComponent } from './data-binding/data-binding.component';
import { CalculatorComponent } from './calculator/calculator.component';
import { RectangleComponent } from './rectangle/rectangle.component';
import { CircleComponent } from './circle/circle.component';
import { BmiComponent } from './bmi/bmi.component';
import { FormsModule } from '@angular/forms';
import { DegreesComponent } from './degrees/degrees.component';
import { EmiComponent } from './emi/emi.component';
import { DirctivesComponent } from './dirctives/dirctives.component';
import { EmployeesComponent } from './employees/employees.component';
import { FlipkartComponent } from './flipkart/flipkart.component';
import { VehicleComponent } from './vehicle/vehicle.component';
import { HttpClientModule } from '@angular/common/http';
import { AccountsComponent } from './accounts/accounts.component';
import { FlipkartapiComponent } from './flipkartapi/flipkartapi.component';
import { PinterestComponent } from './pinterest/pinterest.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    Error404Component,
    WelcomeComponent,
    DataBindingComponent,
    CalculatorComponent,
    RectangleComponent,
    CircleComponent,
    BmiComponent,
    DegreesComponent,
    EmiComponent,
    DirctivesComponent,
    EmployeesComponent,
    FlipkartComponent,
    VehicleComponent,
    AccountsComponent,
    FlipkartapiComponent,
    PinterestComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
