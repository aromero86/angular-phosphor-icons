import { Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: 'ui-icon[ear-slash-bold]',
  standalone: true,
})
export class UiIconEarSlashBold {

    constructor(private el: ElementRef, private renderer: Renderer2) {
        this.el.nativeElement.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"/><line x1="48" y1="40" x2="208" y2="216" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/><path d="M160,216c-8.07,9.77-18.34,16-32,16a44,44,0,0,1-44-44c0-41.49-36-28-36-84A79.63,79.63,0,0,1,63.34,56.88" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/><path d="M91.43,87.77A39.76,39.76,0,0,0,88,104" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/><path d="M169.07,173.18A16,16,0,0,1,144,160a33.16,33.16,0,0,1,2.2-12" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/><path d="M94.27,31.44A80,80,0,0,1,208,104" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/><path d="M167.14,111.59A33.15,33.15,0,0,0,168,104a40,40,0,0,0-40-40c-1.33,0-2.65.07-4,.19" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/></svg>`;
    }
}