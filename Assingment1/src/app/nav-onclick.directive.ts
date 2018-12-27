import { Directive } from '@angular/core';
import {  HostListener, ElementRef ,Renderer2} from '@angular/core';

@Directive({
  selector: '[appNavOnclick]'
})
export class NavOnclickDirective {

  constructor(private el: ElementRef,private renderer: Renderer2) {
  }

  

  @HostListener('click', ['$event'])
onClick(e) {
  this.el.nativeElement.style.backgroundColor = 'red'
  console.log("--",this.el.nativeElement);
  console.log("--",this.renderer);
}

}
