import { Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: 'ui-icon[basketball-duotone]',
  standalone: true,
})
export class UiIconBasketballDuotone {

    constructor(private el: ElementRef, private renderer: Renderer2) {
        this.el.nativeElement.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"/><path d="M60.06,195.91a96,96,0,0,1-.12-135.65h0a95.7,95.7,0,0,1,28,67.76,95.74,95.74,0,0,1-28,67.77Z" opacity="0.2"/><path d="M196.06,195.91a96,96,0,0,1-.12-135.65h0a96,96,0,0,1,0,135.53Z" opacity="0.2"/><circle cx="128" cy="128" r="96" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/><path d="M60,60.24A95.7,95.7,0,0,1,88,128a95.7,95.7,0,0,1-28,67.76" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/><path d="M196,60.24a96,96,0,0,0,0,135.52" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/><line x1="32" y1="128" x2="224" y2="128" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/><line x1="128" y1="32" x2="128" y2="224" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/></svg>`;
    }
}