import { Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: 'ui-icon[seat-light]',
  standalone: true,
})
export class UiIconSeatLight {

    constructor(private el: ElementRef, private renderer: Renderer2) {
        this.el.nativeElement.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"/><line x1="112" y1="232" x2="216" y2="232" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/><path d="M104.84,76.42a8,8,0,0,0,0,7.16l31.78,64a8,8,0,0,0,7.16,4.42H208a8,8,0,0,1,8,8v32a8,8,0,0,1-8,8H114.11a8,8,0,0,1-7.15-4.42l-58.12-116a8,8,0,0,1,0-7.16L71,28.42a8,8,0,0,1,10.73-3.57l33.89,14.31a8,8,0,0,1,3.57,10.73Z" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/></svg>`;
    }
}