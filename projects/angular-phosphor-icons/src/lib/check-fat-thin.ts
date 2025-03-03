import { Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: 'ui-icon[check-fat-thin]',
  standalone: true,
})
export class UiIconCheckFatThin {

    constructor(private el: ElementRef, private renderer: Renderer2) {
        this.el.nativeElement.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"/><path d="M104,147.43l98.34-97.09a8,8,0,0,1,11.32,0l24,23.6a8,8,0,0,1,0,11.32l-128.4,128.4a8,8,0,0,1-11.32,0l-71.6-72a8,8,0,0,1,0-11.31l24-24a8,8,0,0,1,11.32,0Z" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/></svg>`;
    }
}