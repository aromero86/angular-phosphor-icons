import { Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: 'ui-icon[clock-countdown-light]',
  standalone: true,
})
export class UiIconClockCountdownLight {

    constructor(private el: ElementRef, private renderer: Renderer2) {
        this.el.nativeElement.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"/><path d="M224,136c-4.07,49.28-45.67,88-96,88a96,96,0,0,1-96-96c0-50.33,38.72-91.93,88-96" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/><polyline points="128 72 128 128 184 128" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/><circle cx="160" cy="36" r="10"/><circle cx="196" cy="60" r="10"/><circle cx="220" cy="96" r="10"/></svg>`;
    }
}