import { Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: 'ui-icon[hand-waving-duotone]',
  standalone: true,
})
export class UiIconHandWavingDuotone {

    constructor(private el: ElementRef, private renderer: Renderer2) {
        this.el.nativeElement.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"/><path d="M213.27,104,196,74a20,20,0,0,0-34.64,20l-30-52A20,20,0,0,0,96.65,62h0L89.73,50A20,20,0,0,0,55.08,70L69.32,94.67a20,20,0,0,0-34.64,20L74.7,184a80,80,0,0,0,138.57-80Z" opacity="0.2"/><path d="M96.65,62a20,20,0,0,1,34.64-20l30,52" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/><path d="M69.32,94.67,55.08,70A20,20,0,0,1,89.73,50l31.17,54" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/><path d="M158.87,160A40,40,0,0,1,168,105.58L161.32,94A20,20,0,0,1,196,74l17.31,30A80,80,0,0,1,74.7,184l-40-69.32a20,20,0,0,1,34.64-20L88.57,128" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/><path d="M192,33.78A51.84,51.84,0,0,1,223.67,58l.33.57" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/><path d="M74.62,232A111.88,111.88,0,0,1,47,200" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/></svg>`;
    }
}