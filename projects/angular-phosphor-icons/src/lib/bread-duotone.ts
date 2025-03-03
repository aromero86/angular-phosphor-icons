import { Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: 'ui-icon[bread-duotone]',
  standalone: true,
})
export class UiIconBreadDuotone {

    constructor(private el: ElementRef, private renderer: Renderer2) {
        this.el.nativeElement.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"/><path d="M208,111a32,32,0,0,0-8-63H144a32,32,0,0,1,8,63v89a8,8,0,0,1-8,8h56a8,8,0,0,0,8-8Z" opacity="0.2"/><path d="M48,112a32,32,0,0,1,0-64h96a32,32,0,0,1,0,64" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/><path d="M128,48h72a32,32,0,0,1,0,64" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/><path d="M152,111v89a8,8,0,0,1-8,8H48a8,8,0,0,1-8-8V111" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/><path d="M208,111v89a8,8,0,0,1-8,8H144" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/></svg>`;
    }
}