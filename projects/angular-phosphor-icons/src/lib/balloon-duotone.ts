import { Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: 'ui-icon[balloon-duotone]',
  standalone: true,
})
export class UiIconBalloonDuotone {

    constructor(private el: ElementRef, private renderer: Renderer2) {
        this.el.nativeElement.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"/><path d="M208,104a80,80,0,0,0-160,0c0,40.83,30.59,88.18,70.1,95.13h0L104,232h48l-14.09-32.87h0C177.41,192.18,208,144.83,208,104Z" opacity="0.2"/><path d="M208,104c0,44.18-35.82,96-80,96s-80-51.82-80-96a80,80,0,0,1,160,0Z" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/><path d="M136,56a49.52,49.52,0,0,1,40,40" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/><polyline points="137.91 199.13 152 232 104 232 118.09 199.13" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/></svg>`;
    }
}