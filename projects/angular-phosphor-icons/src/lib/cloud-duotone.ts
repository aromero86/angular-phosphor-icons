import { Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: 'ui-icon[cloud-duotone]',
  standalone: true,
})
export class UiIconCloudDuotone {

    constructor(private el: ElementRef, private renderer: Renderer2) {
        this.el.nativeElement.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"/><path d="M160,48A80,80,0,0,0,85.9,97.84l0-.1A56,56,0,1,0,72,208h88a80,80,0,0,0,0-160Z" opacity="0.2"/><path d="M80,128a80,80,0,1,1,80,80H72A56,56,0,1,1,85.92,97.74" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/></svg>`;
    }
}