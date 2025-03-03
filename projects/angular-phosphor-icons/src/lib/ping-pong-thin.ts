import { Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: 'ui-icon[ping-pong-thin]',
  standalone: true,
})
export class UiIconPingPongThin {

    constructor(private el: ElementRef, private renderer: Renderer2) {
        this.el.nativeElement.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"/><path d="M134.58,206.59A31.78,31.78,0,0,1,106,215.41C63.4,207,31.38,167.92,32,122.69c.69-49.55,41.13-90,90.68-90.68,45.23-.63,84.27,31.39,92.72,74a31.78,31.78,0,0,1-8.82,28.58L183,158.21l45.69,32.64a8,8,0,0,1,1,12.16L203,229.66a8,8,0,0,1-12.16-1L158.21,183Z" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/><line x1="206.6" y1="81.4" x2="81.4" y2="206.6" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/></svg>`;
    }
}