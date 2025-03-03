import { Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: 'ui-icon[steering-wheel-duotone]',
  standalone: true,
})
export class UiIconSteeringWheelDuotone {

    constructor(private el: ElementRef, private renderer: Renderer2) {
        this.el.nativeElement.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"/><path d="M222.4,145.55a128,128,0,0,0-188.8,0A96.6,96.6,0,0,0,37.46,160h53a8,8,0,0,1,7.49,5.2l21.86,58.45c2.7.23,5.44.35,8.2.35s5.46-.12,8.15-.34l21.9-58.47a8,8,0,0,1,7.5-5.19h53A96.6,96.6,0,0,0,222.4,145.55Z" opacity="0.2"/><circle cx="128" cy="140" r="12"/><circle cx="128" cy="128" r="96" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/><path d="M33.6,145.55a128,128,0,0,1,188.8,0" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/><path d="M119.8,223.65,97.94,165.2a8,8,0,0,0-7.49-5.2h-53" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/><path d="M136.15,223.66l21.9-58.47a8,8,0,0,1,7.5-5.19h53" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/></svg>`;
    }
}