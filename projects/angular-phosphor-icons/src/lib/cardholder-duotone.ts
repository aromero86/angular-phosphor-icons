import { Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: 'ui-icon[cardholder-duotone]',
  standalone: true,
})
export class UiIconCardholderDuotone {

    constructor(private el: ElementRef, private renderer: Renderer2) {
        this.el.nativeElement.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"/><path d="M128,152a32,32,0,0,0,32-32h64V72a16,16,0,0,0-16-16H48A16,16,0,0,0,32,72v48H96A32,32,0,0,0,128,152Z" opacity="0.2"/><rect x="32" y="56" width="192" height="144" rx="16" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/><path d="M32,120H96a32,32,0,0,0,64,0h64" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/><line x1="32" y1="88" x2="224" y2="88" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/></svg>`;
    }
}