import { Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: 'ui-icon[text-indent-fill]',
  standalone: true,
})
export class UiIconTextIndentFill {

    constructor(private el: ElementRef, private renderer: Renderer2) {
        this.el.nativeElement.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"/><path d="M224,128a8,8,0,0,1-8,8H112a8,8,0,0,1,0-16H216A8,8,0,0,1,224,128ZM112,72H216a8,8,0,0,0,0-16H112a8,8,0,0,0,0,16ZM216,184H40a8,8,0,0,0,0,16H216a8,8,0,0,0,0-16ZM36.94,143.39a8,8,0,0,0,8.72-1.73l40-40a8,8,0,0,0,0-11.32l-40-40A8,8,0,0,0,32,56v80A8,8,0,0,0,36.94,143.39Z"/></svg>`;
    }
}