import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appBorderRadius]'
})
export class BorderRadiusDirective {

  element: ElementRef;

  constructor(private el:ElementRef ) { 
    el.nativeElement.style.borderRadius = '15px';
  }

  

}
