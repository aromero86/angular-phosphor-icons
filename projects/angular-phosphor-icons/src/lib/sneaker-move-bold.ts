import { Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: 'ui-icon[sneaker-move-bold]',
  standalone: true,
})
export class UiIconSneakerMoveBold {

    constructor(private el: ElementRef, private renderer: Renderer2) {
        this.el.nativeElement.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"/><path d="M168,80a56,56,0,0,1-56-56L35,82.41a8,8,0,0,0-.63,11.87L148.06,208H224a8,8,0,0,0,8-8V180.94a8,8,0,0,0-4.42-7.15L199,159.48a56,56,0,0,1-31-50.09Z" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/><line x1="32" y1="172" x2="55.49" y2="172" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/><line x1="48" y1="208" x2="91.49" y2="208" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/><line x1="108.63" y1="112" x2="60.03" y2="63.4" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/></svg>`;
    }
}