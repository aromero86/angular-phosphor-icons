import { Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: 'ui-icon[fingerprint-simple-duotone]',
  standalone: true,
})
export class UiIconFingerprintSimpleDuotone {

    constructor(private el: ElementRef, private renderer: Renderer2) {
        this.el.nativeElement.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"/><circle cx="128" cy="128" r="96" opacity="0.2"/><path d="M176,128A239.33,239.33,0,0,1,158,219.21" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/><path d="M163.75,96A48,48,0,0,0,80,128a143.41,143.41,0,0,1-18,69.73" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/><path d="M96,37.46A96.07,96.07,0,0,1,224,128a288.93,288.93,0,0,1-7.14,64" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/><path d="M23.27,168A95.66,95.66,0,0,0,32,128,95.78,95.78,0,0,1,64,56.45" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/><path d="M110.56,208q-3,6.63-6.57,13" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/><path d="M128,128a192.77,192.77,0,0,1-6,48" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/></svg>`;
    }
}