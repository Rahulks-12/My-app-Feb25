import { Component } from '@angular/core';

@Component({
  selector: 'app-circle',
  templateUrl: './circle.component.html',
  styleUrls: ['./circle.component.css']
})
export class CircleComponent {
  num1:number=3.14;
  num2:number=0;
  result:number=0;
  add(){
    console.log(this.num1,this.num2);
    this.result=this.num1*this.num2;
    console.log(this.result);



  }

}
