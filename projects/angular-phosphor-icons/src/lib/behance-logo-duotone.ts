import { Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: 'ui-icon[behance-logo-duotone]',
  standalone: true,
})
export class UiIconBehanceLogoDuotone {

    constructor(private el: ElementRef, private renderer: Renderer2) {
        this.el.nativeElement.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"/><path d="M160,152a40,40,0,0,1,80,0Z" opacity="0.2"/><path d="M94,124H90a30,30,0,0,0,0-60H32V192H94a34,34,0,0,0,0-68Z" opacity="0.2"/><line x1="168" y1="80" x2="232" y2="80" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/><path d="M32,124H94a34,34,0,0,1,0,68H32V64H90a30,30,0,0,1,0,60" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/><path d="M232,176a40,40,0,1,1,8-24H160" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/></svg>`;
    }
}