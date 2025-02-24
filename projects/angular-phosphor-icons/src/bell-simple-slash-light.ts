import { Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: 'ui-icon[bell-simple-slash-light]',
  standalone: true,
})
export class UiIconBellSimpleSlashLight {

    constructor(private el: ElementRef, private renderer: Renderer2) {
        this.el.nativeElement.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"/><line x1="48" y1="40" x2="208" y2="216" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/><line x1="96" y1="224" x2="160" y2="224" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/><path d="M186.18,192H48a8,8,0,0,1-6.88-12C47.71,168.6,56,139.81,56,104A71.65,71.65,0,0,1,68.85,62.94" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/><path d="M92.48,41.36A72,72,0,0,1,200,104c0,29.1,5.48,53.56,11.07,67.8" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/></svg>`;
    }
}