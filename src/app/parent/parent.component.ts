import { Component } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent {
// capture(value:number){
  capture(value:string){

  alert(value);
}

capture1(value:string){

  // alert(value);
}
count:number=0;
}
