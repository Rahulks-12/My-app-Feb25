import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { Error404Component } from './error404/error404.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { DataBindingComponent } from './data-binding/data-binding.component';
import { CalculatorComponent } from './calculator/calculator.component';
import { RectangleComponent } from './rectangle/rectangle.component';
import { CircleComponent } from './circle/circle.component';
import { BmiComponent } from './bmi/bmi.component';
import { DegreesComponent } from './degrees/degrees.component';
import { EmiComponent } from './emi/emi.component';

const routes: Routes = [
  {path:'dashboard',component:DashboardComponent,children:[{path:'welcome',component:WelcomeComponent},
    {path:'data-binding',component:DataBindingComponent},
  {path:'calculator',component:CalculatorComponent},
{path:'rectangle',component:RectangleComponent},
{path:'circle',component:CircleComponent},
{path:'bmi',component:BmiComponent},
{path:'degrees',component:DegreesComponent},
{path:'Emi',component:EmiComponent}]},
    {path:'',component:LoginComponent},// default routing
  {path:'login',component:LoginComponent},
{  path:'**',component:Error404Component},//wild card routing
];



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
