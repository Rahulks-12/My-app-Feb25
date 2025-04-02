import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-app-textarea',
  templateUrl: './app-textarea.component.html',
  styleUrls: ['./app-textarea.component.css']
})
export class AppTextareaComponent {
@Output() childEvent:EventEmitter<string>= new EventEmitter();
area:string='';
count1:number=0;
send(){
  for(let count=0;count<this.area.length;count++){
    this.count1++;
   

  }
 
}

}
