import { Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: 'ui-icon[rss-simple-duotone]',
  standalone: true,
})
export class UiIconRssSimpleDuotone {

    constructor(private el: ElementRef, private renderer: Renderer2) {
        this.el.nativeElement.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"/><path d="M64,192V40A152,152,0,0,1,216,192Z" opacity="0.2"/><path d="M64,40A152,152,0,0,1,216,192" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/><path d="M64,112a80,80,0,0,1,80,80" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/><circle cx="68" cy="188" r="12"/></svg>`;
    }
}