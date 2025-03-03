import { Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: 'ui-icon[arrow-line-up-left-fill]',
  standalone: true,
})
export class UiIconArrowLineUpLeftFill {

    constructor(private el: ElementRef, private renderer: Renderer2) {
        this.el.nativeElement.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"/><path d="M232,208a8,8,0,0,1-8,8H48a8,8,0,0,1,0-16H224A8,8,0,0,1,232,208ZM68.94,151.39a8,8,0,0,0,8.72-1.73L120,107.31l58.34,58.35a8,8,0,0,0,11.32-11.32L131.31,96l42.35-42.34A8,8,0,0,0,168,40H72a8,8,0,0,0-8,8v96A8,8,0,0,0,68.94,151.39Z"/></svg>`;
    }
}