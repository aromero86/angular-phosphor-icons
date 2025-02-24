import { Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: 'ui-icon[mosque]',
  standalone: true,
})
export class UiIconMosque {

    constructor(private el: ElementRef, private renderer: Renderer2) {
        this.el.nativeElement.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"/><line x1="208" y1="128" x2="48" y2="128" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/><path d="M208,152a16,16,0,0,1,16-16h0a16,16,0,0,1,16,16v56H208" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/><path d="M48,208H16V152a16,16,0,0,1,16-16h0a16,16,0,0,1,16,16" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/><path d="M48,208V128c0-64,80-72,80-104,0,32,80,40,80,104v80H176V176a16,16,0,0,0-16-16h0a16,16,0,0,0-16,16v32H112V176a16,16,0,0,0-16-16h0a16,16,0,0,0-16,16v32Z" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/></svg>`;
    }
}