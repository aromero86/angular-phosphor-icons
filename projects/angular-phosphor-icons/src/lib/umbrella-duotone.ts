import { Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: 'ui-icon[umbrella-duotone]',
  standalone: true,
})
export class UiIconUmbrellaDuotone {

    constructor(private el: ElementRef, private renderer: Renderer2) {
        this.el.nativeElement.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"/><path d="M88,136c0-72,40-104,40-104A104.21,104.21,0,0,0,24,127.29,8,8,0,0,0,32,136Z" opacity="0.2"/><path d="M128,32s40,32,40,104h56a8,8,0,0,0,8-8.71A104.21,104.21,0,0,0,128,32Z" opacity="0.2"/><path d="M176,200a24,24,0,0,1-48,0V136" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/><path d="M32,136a8,8,0,0,1-8-8.71,104.37,104.37,0,0,1,207.94,0,8,8,0,0,1-8,8.71Z" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/><path d="M88,136c0-72,40-104,40-104s40,32,40,104" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/></svg>`;
    }
}