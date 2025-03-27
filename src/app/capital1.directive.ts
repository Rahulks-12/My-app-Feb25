import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appCapital1]'
})
export class Capital1Directive {

  constructor(private _elementRef:ElementRef) { }
@HostListener('keyup')
change(){
  this. _elementRef.nativeElement.value= this._elementRef.nativeElement.value.toUpperCase();
}
}
