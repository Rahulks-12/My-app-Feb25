import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-app-textarea',
  templateUrl: './app-textarea.component.html',
  styleUrls: ['./app-textarea.component.css']
})
export class AppTextareaComponent {
@Output() childEvent:EventEmitter<string>= new EventEmitter();
area:any='';
send(){
  this.childEvent.emit(this.area);
}
count:number=0;
}
