import { Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: 'ui-icon[cactus-light]',
  standalone: true,
})
export class UiIconCactusLight {

    constructor(private el: ElementRef, private renderer: Renderer2) {
        this.el.nativeElement.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"/><line x1="40" y1="216" x2="216" y2="216" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/><path d="M96,216V136H84A60,60,0,0,1,24,76h0A20,20,0,0,1,44,56h0A20,20,0,0,1,64,76h0A20,20,0,0,0,84,96H96V56a32,32,0,0,1,32-32h0a32,32,0,0,1,32,32v80h12a20,20,0,0,0,20-20h0a20,20,0,0,1,20-20h0a20,20,0,0,1,20,20h0a60,60,0,0,1-60,60H160v40" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/></svg>`;
    }
}