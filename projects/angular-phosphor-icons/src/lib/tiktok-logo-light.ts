import { Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: 'ui-icon[tiktok-logo-light]',
  standalone: true,
})
export class UiIconTiktokLogoLight {

    constructor(private el: ElementRef, private renderer: Renderer2) {
        this.el.nativeElement.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"/><path d="M168,102a95.55,95.55,0,0,0,56,18V80a56,56,0,0,1-56-56H128V156a28,28,0,1,1-40-25.31V88c-31.83,5.67-56,34.54-56,68a68,68,0,0,0,136,0Z" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/></svg>`;
    }
}