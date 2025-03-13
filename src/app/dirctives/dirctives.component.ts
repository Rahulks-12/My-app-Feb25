import { Component } from '@angular/core';

@Component({
  selector: 'app-dirctives',
  templateUrl: './dirctives.component.html',
  styleUrls: ['./dirctives.component.css']
})
export class DirctivesComponent {
  isVisible:boolean=true;


states:string[]=['Andhra pradesh','karnataka','kerala','Maharastra','Tamil Nadu','Telengana'];

products:any=[
  {name:'pen',price:10,rating:3.7},
  {name:'book',price:50,rating:1.9},
  {name:'shirt',price:479,rating:4.3},
  {name:'shoes',price:1599,rating:5},
  {name:'bike',price:100000,rating:4.9},
  {name:'car',price:1000000,rating:4.7}
  

]
newDate:any=new Date();
}
