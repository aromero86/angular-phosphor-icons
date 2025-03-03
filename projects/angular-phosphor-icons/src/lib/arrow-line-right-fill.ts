import { Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: 'ui-icon[arrow-line-right-fill]',
  standalone: true,
})
export class UiIconArrowLineRightFill {

    constructor(private el: ElementRef, private renderer: Renderer2) {
        this.el.nativeElement.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"/><path d="M189.66,122.34a8,8,0,0,1,0,11.32l-72,72A8,8,0,0,1,104,200V136H32a8,8,0,0,1,0-16h72V56a8,8,0,0,1,13.66-5.66ZM216,32a8,8,0,0,0-8,8V216a8,8,0,0,0,16,0V40A8,8,0,0,0,216,32Z"/></svg>`;
    }
}