import { Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: 'ui-icon[airplay-duotone]',
  standalone: true,
})
export class UiIconAirplayDuotone {

    constructor(private el: ElementRef, private renderer: Renderer2) {
        this.el.nativeElement.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"/><path d="M208,48H48A16,16,0,0,0,32,64V176a16,16,0,0,0,16,16h52.57L128,160l27.43,32H208a16,16,0,0,0,16-16V64A16,16,0,0,0,208,48Z" opacity="0.2"/><polygon points="128 160 176 216 80 216 128 160" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/><path d="M56,192H48a16,16,0,0,1-16-16V64A16,16,0,0,1,48,48H208a16,16,0,0,1,16,16V176a16,16,0,0,1-16,16h-8" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/></svg>`;
    }
}