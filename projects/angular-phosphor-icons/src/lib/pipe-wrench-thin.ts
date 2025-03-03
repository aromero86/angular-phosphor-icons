import { Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: 'ui-icon[pipe-wrench-thin]',
  standalone: true,
})
export class UiIconPipeWrenchThin {

    constructor(private el: ElementRef, private renderer: Renderer2) {
        this.el.nativeElement.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"/><path d="M125.66,145.66a8,8,0,0,0,0-11.32L77,85a17,17,0,0,1,0-24h0a17,17,0,0,1,24,0l72.69,73.37a8,8,0,0,1,0,11.32L85,235a17,17,0,0,1-24,0h0a17,17,0,0,1,0-24Z" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/><path d="M132.28,92.58,150.9,74.34a8,8,0,0,1,11.25-.06l37.45,35.38a8,8,0,0,0,11.31,0l3.72-3.72a32,32,0,0,0,0-45.25l-45-42.35a8,8,0,0,0-11.32,0L108.12,68.19" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/><path d="M84,92.12,58.34,117.66a8,8,0,0,0,0,11.31L71,141.66a8,8,0,0,0,11.31,0L108,116.4" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/></svg>`;
    }
}