import { Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: 'ui-icon[coins-duotone]',
  standalone: true,
})
export class UiIconCoinsDuotone {

    constructor(private el: ElementRef, private renderer: Renderer2) {
        this.el.nativeElement.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"/><path d="M176,96.72h0V124c0,18-29.24,32.85-67.47,35.56h0C122.44,164.83,140.4,168,160,168c44.18,0,80-16.12,80-36C240,114.58,212.52,100.06,176,96.72Z" opacity="0.2"/><ellipse cx="96" cy="84" rx="80" ry="36" opacity="0.2"/><ellipse cx="96" cy="84" rx="80" ry="36" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/><path d="M16,84v40c0,19.88,35.82,36,80,36s80-16.12,80-36V84" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/><line x1="64" y1="117" x2="64" y2="157" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/><path d="M176,96.72c36.52,3.34,64,17.86,64,35.28,0,19.88-35.82,36-80,36-19.6,0-37.56-3.17-51.47-8.44" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/><path d="M80,159.28V172c0,19.88,35.82,36,80,36s80-16.12,80-36V132" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/><line x1="192" y1="165" x2="192" y2="205" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/><line x1="128" y1="117" x2="128" y2="205" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/></svg>`;
    }
}