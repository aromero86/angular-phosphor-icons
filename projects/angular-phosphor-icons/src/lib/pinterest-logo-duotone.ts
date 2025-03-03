import { Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: 'ui-icon[pinterest-logo-duotone]',
  standalone: true,
})
export class UiIconPinterestLogoDuotone {

    constructor(private el: ElementRef, private renderer: Renderer2) {
        this.el.nativeElement.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"/><path d="M110.37,162.93S120,184,152,184s64-27.82,64-72a80,80,0,0,0-74.86-79.84h0L128,88l-17.63,74.93Z" opacity="0.2"/><line x1="128" y1="88" x2="96" y2="224" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/><path d="M66.7,152A80,80,0,1,1,216,112c0,44.18-32,72-64,72s-41.63-21.07-41.63-21.07" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/></svg>`;
    }
}