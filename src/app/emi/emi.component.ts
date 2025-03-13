import { Component } from '@angular/core';

@Component({
  selector: 'app-emi',
  templateUrl: './emi.component.html',
  styleUrls: ['./emi.component.css']
})
export class EmiComponent {
num1:number=0;
num2:number=0;
num3:number=0;
result:number=0
Emi(){
  console.log(this.num1,this.num2,this.num3);
  this.result=((this.num1* (this.num2)*((1+this.num2)^(this.num3))/((1+this.num2)^(this.num3)))-1)

}

}
