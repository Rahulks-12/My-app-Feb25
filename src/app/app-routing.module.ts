import { Component, NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
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
import { DirctivesComponent } from './dirctives/dirctives.component';
import { EmployeesComponent } from './employees/employees.component';
import { FlipkartComponent } from './flipkart/flipkart.component';
import { VehicleComponent } from './vehicle/vehicle.component';
import { AccountsComponent } from './accounts/accounts.component';
import { FlipkartapiComponent } from './flipkartapi/flipkartapi.component';
import { PinterestComponent } from './pinterest/pinterest.component';
import { CreateVehicleComponent } from './create-vehicle/create-vehicle.component';
import { CreateAccountsComponent } from './create-accounts/create-accounts.component';
import { StudentidComponent } from './studentid/studentid.component';
import { CreateUserComponent } from './create-user/create-user.component';
import { StudentFormComponent } from './student-form/student-form.component';
import { VehicleDetailsComponent } from './vehicle-details/vehicle-details.component';
import { CreateStudentidComponent } from './create-studentid/create-studentid.component';
import { AuthenticationGuard } from './authentication.guard';
import { Sibling1Component } from './sibling1/sibling1.component';
import { ParentComponent } from './parent/parent.component';
import { AboutCeoComponent } from './about-us/about-ceo/about-ceo.component';
import { AboutCompanyComponent } from './about-us/about-company/about-company.component';


const routes: Routes = [
  {path:'dashboard',component:DashboardComponent,canActivate:[AuthenticationGuard],children:[{path:'welcome',component:WelcomeComponent},
    {path:'data-binding',component:DataBindingComponent},
  {path:'calculator',component:CalculatorComponent},
{path:'rectangle',component:RectangleComponent},
{path:'circle',component:CircleComponent},
{path:'bmi',component:BmiComponent},
{path:'degrees',component:DegreesComponent},
{path:'Emi',component:EmiComponent},
{path:'directives',component:DirctivesComponent},
{path:'employees',component:EmployeesComponent},
{path:'Flipkart',component:FlipkartComponent},
{path:'vehicle',component:VehicleComponent,canActivate:[AuthenticationGuard]},
{path:'accounts',component:AccountsComponent},
{path:'flipkartapi',component:FlipkartapiComponent},
{path:'pinterest',component:PinterestComponent},
  {path:'create-vehicle',component:CreateVehicleComponent},
  {path:'create-accounts',component:CreateAccountsComponent},
  {path:'studentid',component:StudentidComponent},
  {path:'create-user',component:CreateUserComponent},
  {path:'student-form',component:StudentFormComponent},
  {path:'vehicle-details/:id',component:VehicleDetailsComponent},
  {path:'edit-vehicle/:id',component:CreateVehicleComponent},
  {path:'create-studentid',component:CreateStudentidComponent},
  {path:'sibling1',component:Sibling1Component},
  {path:'parent',component:ParentComponent},
  {path:'about-ceo',component:AboutCeoComponent},
  {path:'about-company',component:AboutCompanyComponent},
  {path:'payments',
    loadChildren:()=>import('./payments/payments.module').then(m=>m.PaymentsModule)
  }
]},
    {path:'',component:LoginComponent},// default routing
  {path:'login',component:LoginComponent},
{  path:'**',component:Error404Component},//wild card routing
];



@NgModule({
  imports: [RouterModule.forRoot(routes,{preloadingStrategy:PreloadAllModules})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
