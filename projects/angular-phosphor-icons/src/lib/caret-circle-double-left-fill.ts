import { Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: 'ui-icon[caret-circle-double-left-fill]',
  standalone: true,
})
export class UiIconCaretCircleDoubleLeftFill {

    constructor(private el: ElementRef, private renderer: Renderer2) {
        this.el.nativeElement.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"/><path d="M201.57,54.42a104,104,0,1,0,0,147.15A104.17,104.17,0,0,0,201.57,54.42Zm-83.92,99.93a8,8,0,1,1-11.32,11.32l-32-32a8,8,0,0,1,0-11.32l32-32a8,8,0,1,1,11.32,11.32L91.29,128Zm56,0a8,8,0,1,1-11.32,11.32l-32-32a8,8,0,0,1,0-11.32l32-32a8,8,0,1,1,11.32,11.32L147.32,128Z"/></svg>`;
    }
}