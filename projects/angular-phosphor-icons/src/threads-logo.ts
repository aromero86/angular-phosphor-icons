import { Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: 'ui-icon[threads-logo]',
  standalone: true,
})
export class UiIconThreadsLogo {

    constructor(private el: ElementRef, private renderer: Renderer2) {
        this.el.nativeElement.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"/><path d="M200,77.65C189.86,51.29,168.57,32,128,32c-64,0-80,48-80,96s16,96,80,96c48,0,72-32,72-56,0-64-104-64-104-16,0,40,72,40,72-24,0-56-56-56-72-32" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/></svg>`;
    }
}