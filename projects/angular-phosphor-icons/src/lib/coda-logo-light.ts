import { Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: 'ui-icon[coda-logo-light]',
  standalone: true,
})
export class UiIconCodaLogoLight {

    constructor(private el: ElementRef, private renderer: Renderer2) {
        this.el.nativeElement.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"/><path d="M176,176a48,48,0,1,1,25.85-88.64A4,4,0,0,0,208,84V48a8,8,0,0,0-8-8H56a8,8,0,0,0-8,8V208a8,8,0,0,0,8,8H200a8,8,0,0,0,8-8V172a4,4,0,0,0-6.12-3.38C193.9,173.74,186.27,176.41,176,176Z" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/></svg>`;
    }
}