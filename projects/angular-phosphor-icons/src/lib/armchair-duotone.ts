import { Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: 'ui-icon[armchair-duotone]',
  standalone: true,
})
export class UiIconArmchairDuotone {

    constructor(private el: ElementRef, private renderer: Renderer2) {
        this.el.nativeElement.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"/><path d="M208,160v40a8,8,0,0,1-8,8H56a8,8,0,0,1-8-8V160h0a32,32,0,0,1,0-64V72A32,32,0,0,1,80,40h96a32,32,0,0,1,32,32V96a32,32,0,0,1,0,64Z" opacity="0.2"/><line x1="80" y1="136" x2="176" y2="136" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/><path d="M48,96V72A32,32,0,0,1,80,40h96a32,32,0,0,1,32,32V96" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/><path d="M80,168V128a32,32,0,1,0-32,32h0v40a8,8,0,0,0,8,8H200a8,8,0,0,0,8-8V160h0a32,32,0,1,0-32-32v40" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/></svg>`;
    }
}