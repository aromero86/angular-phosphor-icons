import { Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: 'ui-icon[arrow-line-down-fill]',
  standalone: true,
})
export class UiIconArrowLineDownFill {

    constructor(private el: ElementRef, private renderer: Renderer2) {
        this.el.nativeElement.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"/><path d="M50.34,117.66A8,8,0,0,1,56,104h64V32a8,8,0,0,1,16,0v72h64a8,8,0,0,1,5.66,13.66l-72,72a8,8,0,0,1-11.32,0ZM216,208H40a8,8,0,0,0,0,16H216a8,8,0,0,0,0-16Z"/></svg>`;
    }
}