import { Component } from '@angular/core';

@Component({
  selector: 'app-degrees',
  templateUrl: './degrees.component.html',
  styleUrls: ['./degrees.component.css']
})
export class DegreesComponent {
  num1:number=0;
  result:number=0;
  convert(){
    console.log(this.num1);
    this.result=(this.num1 * 1.8)+32;
    console.log(this.result);
  }

}
