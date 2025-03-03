import { Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: 'ui-icon[cherries-duotone]',
  standalone: true,
})
export class UiIconCherriesDuotone {

    constructor(private el: ElementRef, private renderer: Renderer2) {
        this.el.nativeElement.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"/><path d="M176,80a63.92,63.92,0,0,0-52.19,27A64,64,0,1,0,140.2,197l0,.07A64,64,0,1,0,176,80Z" opacity="0.2"/><circle cx="88" cy="160" r="64" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/><path d="M112,136s-8,8-24,8-24-8-24-8" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/><path d="M200,120s-8,8-24,8-24-8-24-8" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/><path d="M176,128C168,16,56,32,56,32c48,32,32,112,32,112" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/><path d="M123.81,107a64,64,0,1,1,16.41,90.12" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/></svg>`;
    }
}