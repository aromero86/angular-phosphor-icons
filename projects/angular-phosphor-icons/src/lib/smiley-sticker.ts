import { Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: 'ui-icon[smiley-sticker]',
  standalone: true,
})
export class UiIconSmileySticker {

    constructor(private el: ElementRef, private renderer: Renderer2) {
        this.el.nativeElement.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"/><path d="M168,152c-8.3,14.35-22.23,24-40,24s-31.7-9.65-40-24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/><path d="M156.22,219.79a95.9,95.9,0,1,1,63.57-63.58Z" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/><circle cx="92" cy="108" r="12"/><circle cx="164" cy="108" r="12"/></svg>`;
    }
}