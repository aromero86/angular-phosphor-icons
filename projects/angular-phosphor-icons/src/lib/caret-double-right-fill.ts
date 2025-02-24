import { Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: 'ui-icon[caret-double-right-fill]',
  standalone: true,
})
export class UiIconCaretDoubleRightFill {

    constructor(private el: ElementRef, private renderer: Renderer2) {
        this.el.nativeElement.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"/><path d="M221.66,122.34l-80-80A8,8,0,0,0,128,48v60.69L61.66,42.34A8,8,0,0,0,48,48V208a8,8,0,0,0,13.66,5.66L128,147.31V208a8,8,0,0,0,13.66,5.66l80-80A8,8,0,0,0,221.66,122.34Z"/></svg>`;
    }
}