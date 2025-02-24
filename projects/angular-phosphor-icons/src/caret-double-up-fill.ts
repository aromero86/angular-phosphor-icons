import { Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: 'ui-icon[caret-double-up-fill]',
  standalone: true,
})
export class UiIconCaretDoubleUpFill {

    constructor(private el: ElementRef, private renderer: Renderer2) {
        this.el.nativeElement.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"/><path d="M147.31,128H208a8,8,0,0,0,5.66-13.66l-80-80a8,8,0,0,0-11.32,0l-80,80A8,8,0,0,0,48,128h60.69L42.34,194.34A8,8,0,0,0,48,208H208a8,8,0,0,0,5.66-13.66Z"/></svg>`;
    }
}