import { Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: 'ui-icon[trend-down-fill]',
  standalone: true,
})
export class UiIconTrendDownFill {

    constructor(private el: ElementRef, private renderer: Renderer2) {
        this.el.nativeElement.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"/><path d="M240,128v64a8,8,0,0,1-8,8H168a8,8,0,0,1-5.66-13.66L188.69,160,136,107.31l-34.34,34.35a8,8,0,0,1-11.32,0l-72-72A8,8,0,0,1,29.66,58.34L96,124.69l34.34-34.35a8,8,0,0,1,11.32,0L200,148.69l26.34-26.35A8,8,0,0,1,240,128Z"/></svg>`;
    }
}