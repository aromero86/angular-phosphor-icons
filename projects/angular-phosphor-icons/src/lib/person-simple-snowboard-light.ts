import { Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: 'ui-icon[person-simple-snowboard-light]',
  standalone: true,
})
export class UiIconPersonSimpleSnowboardLight {

    constructor(private el: ElementRef, private renderer: Renderer2) {
        this.el.nativeElement.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"/><circle cx="164" cy="52" r="20" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/><path d="M28.44,177.67,185.88,223.3A17.25,17.25,0,0,0,208,206.82h0a17.19,17.19,0,0,0-12.44-16.49L38.12,144.7A17.25,17.25,0,0,0,16,161.18h0A17.19,17.19,0,0,0,28.44,177.67Z" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/><line x1="80" y1="80" x2="216" y2="120" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/><line x1="131.28" y1="95.08" x2="88.47" y2="159.29" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/><polyline points="114.18 120.73 160 134 134.15 172.53" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/></svg>`;
    }
}