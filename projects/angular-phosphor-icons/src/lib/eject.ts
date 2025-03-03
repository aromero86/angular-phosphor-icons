import { Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: 'ui-icon[eject]',
  standalone: true,
})
export class UiIconEject {

    constructor(private el: ElementRef, private renderer: Renderer2) {
        this.el.nativeElement.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"/><rect x="108" y="92" width="40" height="176" rx="8" transform="translate(-52 308) rotate(-90)" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/><path d="M42.19,114.63l73.74-77.5a16.76,16.76,0,0,1,24.14,0l73.74,77.5c4.85,5.1,1.12,13.37-6,13.37H48.23C41.07,128,37.34,119.73,42.19,114.63Z" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/></svg>`;
    }
}