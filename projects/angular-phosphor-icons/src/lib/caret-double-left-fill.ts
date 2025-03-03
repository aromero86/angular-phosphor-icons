import { Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: 'ui-icon[caret-double-left-fill]',
  standalone: true,
})
export class UiIconCaretDoubleLeftFill {

    constructor(private el: ElementRef, private renderer: Renderer2) {
        this.el.nativeElement.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"/><path d="M203.06,40.61a8,8,0,0,0-8.72,1.73L128,108.69V48a8,8,0,0,0-13.66-5.66l-80,80a8,8,0,0,0,0,11.32l80,80A8,8,0,0,0,128,208V147.31l66.34,66.35A8,8,0,0,0,208,208V48A8,8,0,0,0,203.06,40.61Z"/></svg>`;
    }
}