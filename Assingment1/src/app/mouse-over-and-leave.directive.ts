import { Directive, HostListener, ElementRef } from '@angular/core';

@Directive({
  selector: '[appMouseOverAndLeave]'
})
export class MouseOverAndLeaveDirective {

  constructor(private el: ElementRef) {
  }

  @HostListener('mouseover') onMouseOver() {
    this.el.nativeElement.style.backgroundColor = 'blue'
  }

  @HostListener('mouseout') onMouseOut() {
    this.el.nativeElement.style.backgroundColor = ''
  }

}
