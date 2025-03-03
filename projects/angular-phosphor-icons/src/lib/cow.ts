import { Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: 'ui-icon[cow]',
  standalone: true,
})
export class UiIconCow {

    constructor(private el: ElementRef, private renderer: Renderer2) {
        this.el.nativeElement.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"/><path d="M56,24h0a48,48,0,0,0,48,48h48a48,48,0,0,0,48-48h0" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/><rect x="48" y="160" width="160" height="64" rx="32" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/><line x1="80" y1="192" x2="96" y2="192" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/><line x1="160" y1="192" x2="176" y2="192" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/><circle cx="100" cy="124" r="12"/><circle cx="156" cy="124" r="12"/><path d="M160,72h32.78a48,48,0,0,1,47.07,38.53A8,8,0,0,1,232,120H192" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/><path d="M96,72H63.22a48,48,0,0,0-47.07,38.53A8,8,0,0,0,24,120H64" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/><path d="M64,164.28V104A32,32,0,0,1,96,72h64a32,32,0,0,1,32,32v60.28" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/></svg>`;
    }
}