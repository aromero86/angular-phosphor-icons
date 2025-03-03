import { Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: 'ui-icon[radical-duotone]',
  standalone: true,
})
export class UiIconRadicalDuotone {

    constructor(private el: ElementRef, private renderer: Renderer2) {
        this.el.nativeElement.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"/><path d="M32,80H240a0,0,0,0,1,0,0V192a16,16,0,0,1-16,16H48a16,16,0,0,1-16-16V80A0,0,0,0,1,32,80Z" opacity="0.2"/><polyline points="240 104 240 80 128 80 80 208 32 80" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/></svg>`;
    }
}