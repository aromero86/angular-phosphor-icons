import { Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: 'ui-icon[knife]',
  standalone: true,
})
export class UiIconKnife {

    constructor(private el: ElementRef, private renderer: Renderer2) {
        this.el.nativeElement.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"/><path d="M146,90l54,54s-72,92-176,68L198.2,37.8a19.8,19.8,0,0,1,28,0h0a19.8,19.8,0,0,1,0,28L174,118" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/></svg>`;
    }
}