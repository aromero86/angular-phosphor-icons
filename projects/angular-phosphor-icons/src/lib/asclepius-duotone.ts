import { Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: 'ui-icon[asclepius-duotone]',
  standalone: true,
})
export class UiIconAsclepiusDuotone {

    constructor(private el: ElementRef, private renderer: Renderer2) {
        this.el.nativeElement.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"/><path d="M88,48v8A32,32,0,0,1,56,88H32V80A32,32,0,0,1,64,48Z" opacity="0.2"/><line x1="128" y1="24" x2="128" y2="232" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/><path d="M160,166.11A24,24,0,0,1,168,184h0a24,24,0,0,1-24,24H96" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/><path d="M160,48h17a31,31,0,0,1,31,31v1a32,32,0,0,1-32,32H96a24,24,0,0,0-24,24h0a24,24,0,0,0,24,24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/><path d="M88,48v8A32,32,0,0,1,56,88H32V80A32,32,0,0,1,64,48H96" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/></svg>`;
    }
}