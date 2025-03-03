import { Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: 'ui-icon[face-mask-bold]',
  standalone: true,
})
export class UiIconFaceMaskBold {

    constructor(private el: ElementRef, private renderer: Renderer2) {
        this.el.nativeElement.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"/><line x1="92" y1="100" x2="164" y2="100" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/><line x1="92" y1="140" x2="164" y2="140" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/><path d="M209.41,152H220a24,24,0,0,0,24-24V104a24,24,0,0,0-24-24h-8" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/><path d="M46.59,152H36a24,24,0,0,1-24-24V104A24,24,0,0,1,36,80h8" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/><path d="M48,76.8a8,8,0,0,1,5-7.43l72-28.8a8,8,0,0,1,5.94,0l72,28.8a8,8,0,0,1,5,7.43V136c0,56-80,72-80,72s-80-16-80-72Z" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/></svg>`;
    }
}