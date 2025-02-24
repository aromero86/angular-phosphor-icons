import { Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: 'ui-icon[infinity-bold]',
  standalone: true,
})
export class UiIconInfinityBold {

    constructor(private el: ElementRef, private renderer: Renderer2) {
        this.el.nativeElement.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"/><path d="M101.28,158.17l-3.34,3.77a48,48,0,1,1,0-67.88l60.12,67.88a48,48,0,1,0,0-67.88l-3.34,3.77" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/></svg>`;
    }
}