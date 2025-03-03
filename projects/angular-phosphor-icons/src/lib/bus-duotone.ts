import { Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: 'ui-icon[bus-duotone]',
  standalone: true,
})
export class UiIconBusDuotone {

    constructor(private el: ElementRef, private renderer: Renderer2) {
        this.el.nativeElement.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"/><path d="M88,184v24a8,8,0,0,1-8,8H56a8,8,0,0,1-8-8V184Z" opacity="0.2"/><path d="M208,184v24a8,8,0,0,1-8,8H176a8,8,0,0,1-8-8V184Z" opacity="0.2"/><rect x="48" y="72" width="160" height="40" opacity="0.2"/><line x1="48" y1="72" x2="208" y2="72" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/><line x1="48" y1="112" x2="208" y2="112" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/><path d="M208,184H48V64A24,24,0,0,1,72,40H184a24,24,0,0,1,24,24Z" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/><path d="M208,184v24a8,8,0,0,1-8,8H176a8,8,0,0,1-8-8V184" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/><path d="M88,184v24a8,8,0,0,1-8,8H56a8,8,0,0,1-8-8V184" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/><circle cx="92" cy="148" r="12"/><circle cx="164" cy="148" r="12"/><line x1="240" y1="80" x2="240" y2="104" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/><line x1="16" y1="80" x2="16" y2="104" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/></svg>`;
    }
}