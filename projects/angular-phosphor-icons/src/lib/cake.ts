import { Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: 'ui-icon[cake]',
  standalone: true,
})
export class UiIconCake {

    constructor(private el: ElementRef, private renderer: Renderer2) {
        this.el.nativeElement.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"/><line x1="128" y1="72" x2="128" y2="96" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/><path d="M48,96H208a16,16,0,0,1,16,16v23.33c0,17.44-13.67,32.18-31.1,32.66A32,32,0,0,1,160,136a32,32,0,0,1-64,0,32,32,0,0,1-32.9,32C45.67,167.51,32,152.77,32,135.33V112A16,16,0,0,1,48,96Z" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/><path d="M216,156.9V200a16,16,0,0,1-16,16H56a16,16,0,0,1-16-16V156.9" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/><path d="M152,48a24,24,0,0,1-48,0c0-24,24-40,24-40S152,24,152,48Z" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/></svg>`;
    }
}