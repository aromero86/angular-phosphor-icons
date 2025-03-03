import { Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: 'ui-icon[perspective-duotone]',
  standalone: true,
})
export class UiIconPerspectiveDuotone {

    constructor(private el: ElementRef, private renderer: Renderer2) {
        this.el.nativeElement.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"/><path d="M216,208a8,8,0,0,1-9.43,7.87l-160-29.09A8,8,0,0,1,40,178.91V77.09a8,8,0,0,1,6.57-7.87l160-29.09A8,8,0,0,1,216,48Z" opacity="0.2"/><path d="M216,208a8,8,0,0,1-9.43,7.87l-160-29.09A8,8,0,0,1,40,178.91V77.09a8,8,0,0,1,6.57-7.87l160-29.09A8,8,0,0,1,216,48Z" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/><line x1="16" y1="128" x2="240" y2="128" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/></svg>`;
    }
}