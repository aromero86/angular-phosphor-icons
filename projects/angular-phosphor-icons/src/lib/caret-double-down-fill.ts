import { Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: 'ui-icon[caret-double-down-fill]',
  standalone: true,
})
export class UiIconCaretDoubleDownFill {

    constructor(private el: ElementRef, private renderer: Renderer2) {
        this.el.nativeElement.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"/><path d="M208,128H147.31l66.35-66.34A8,8,0,0,0,208,48H48a8,8,0,0,0-5.66,13.66L108.69,128H48a8,8,0,0,0-5.66,13.66l80,80a8,8,0,0,0,11.32,0l80-80A8,8,0,0,0,208,128Z"/></svg>`;
    }
}