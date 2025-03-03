import { Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: 'ui-icon[armchair-bold]',
  standalone: true,
})
export class UiIconArmchairBold {

    constructor(private el: ElementRef, private renderer: Renderer2) {
        this.el.nativeElement.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"/><line x1="92" y1="136" x2="164" y2="136" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/><path d="M164,164V128a40,40,0,1,1,44,39.8V200a8,8,0,0,1-8,8H56a8,8,0,0,1-8-8V167.8A40,40,0,1,1,92,128v36" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/><path d="M48,88.2V72A32,32,0,0,1,80,40h96a32,32,0,0,1,32,32V88.2" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/></svg>`;
    }
}