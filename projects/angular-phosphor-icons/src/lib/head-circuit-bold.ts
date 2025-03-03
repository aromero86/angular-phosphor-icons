import { Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: 'ui-icon[head-circuit-bold]',
  standalone: true,
})
export class UiIconHeadCircuitBold {

    constructor(private el: ElementRef, private renderer: Renderer2) {
        this.el.nativeElement.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"/><path d="M124,100a24,24,0,1,1,24-24A24,24,0,0,1,124,100Z"/><path d="M144,160a24,24,0,1,1,24-24A24,24,0,0,1,144,160Z"/><path d="M120,216H72a8,8,0,0,1-8-8V171.81L36.42,159.18a8,8,0,0,1-3.77-10.3L56,104a80,80,0,1,1,128,64l8,64" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/><polyline points="214.38 88 184 88 144 136" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/><line x1="124" y1="76" x2="124" y2="24.89" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/></svg>`;
    }
}