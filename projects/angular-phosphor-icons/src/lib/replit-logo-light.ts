import { Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: 'ui-icon[replit-logo-light]',
  standalone: true,
})
export class UiIconReplitLogoLight {

    constructor(private el: ElementRef, private renderer: Renderer2) {
        this.el.nativeElement.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"/><path d="M144,40V216a8,8,0,0,1-8,8H72a8,8,0,0,1-8-8V168a8,8,0,0,1,8-8H216a8,8,0,0,0,8-8V104a8,8,0,0,0-8-8H72a8,8,0,0,1-8-8V40a8,8,0,0,1,8-8h64A8,8,0,0,1,144,40Z" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/></svg>`;
    }
}