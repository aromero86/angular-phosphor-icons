import { Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: 'ui-icon[goodreads-logo-thin]',
  standalone: true,
})
export class UiIconGoodreadsLogoThin {

    constructor(private el: ElementRef, private renderer: Renderer2) {
        this.el.nativeElement.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"/><path d="M72,88a56,56,0,0,1,112,0v24a56,56,0,0,1-112,0Z" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/><path d="M184,32V168a56,56,0,0,1-56,56c-19,0-37.88-9.49-48-24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/></svg>`;
    }
}