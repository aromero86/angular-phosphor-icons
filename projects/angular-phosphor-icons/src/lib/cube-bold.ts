import { Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: 'ui-icon[cube-bold]',
  standalone: true,
})
export class UiIconCubeBold {

    constructor(private el: ElementRef, private renderer: Renderer2) {
        this.el.nativeElement.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"/><polyline points="32.7 76.92 128 129.08 223.3 76.92" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/><path d="M131.84,25l88,48.18a8,8,0,0,1,4.16,7v95.64a8,8,0,0,1-4.16,7l-88,48.18a8,8,0,0,1-7.68,0l-88-48.18a8,8,0,0,1-4.16-7V80.18a8,8,0,0,1,4.16-7l88-48.18A8,8,0,0,1,131.84,25Z" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/><line x1="128" y1="129.09" x2="128" y2="232" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/></svg>`;
    }
}