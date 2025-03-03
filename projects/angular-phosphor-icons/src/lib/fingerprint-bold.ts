import { Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: 'ui-icon[fingerprint-bold]',
  standalone: true,
})
export class UiIconFingerprintBold {

    constructor(private el: ElementRef, private renderer: Renderer2) {
        this.el.nativeElement.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"/><path d="M108,128a20,20,0,0,1,40,0,211.13,211.13,0,0,1-25,99.88" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/><path d="M128,68a60,60,0,0,1,60,60q0,12.13-1.12,24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/><path d="M51.35,192.22A131.39,131.39,0,0,0,68,128,59.85,59.85,0,0,1,88,83.29" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/><path d="M103.32,168A171,171,0,0,1,83,217.33" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/><path d="M179.8,192a250.79,250.79,0,0,1-8.4,26.12" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/><path d="M22.28,160A92,92,0,0,0,28,128h0a100,100,0,0,1,200,0h0a293.41,293.41,0,0,1-7,64" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/></svg>`;
    }
}