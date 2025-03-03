import { Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: 'ui-icon[fingerprint-simple-bold]',
  standalone: true,
})
export class UiIconFingerprintSimpleBold {

    constructor(private el: ElementRef, private renderer: Renderer2) {
        this.el.nativeElement.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"/><path d="M159.73,92A48,48,0,0,0,80,128a143.41,143.41,0,0,1-18,69.73" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/><path d="M176,132a239.17,239.17,0,0,1-17.91,87.21" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/><path d="M108.68,212q-2.22,4.56-4.68,9" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/><path d="M128,128a192.72,192.72,0,0,1-5.07,44" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/><path d="M100,36.15A96.07,96.07,0,0,1,224,128a288.93,288.93,0,0,1-7.14,64" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/><path d="M23.28,168A95.66,95.66,0,0,0,32,128,95.71,95.71,0,0,1,60,60.23" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/></svg>`;
    }
}