import { Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: 'ui-icon[navigation-arrow-bold]',
  standalone: true,
})
export class UiIconNavigationArrowBold {

    constructor(private el: ElementRef, private renderer: Renderer2) {
        this.el.nativeElement.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"/><path d="M152,152,234.35,129a8,8,0,0,0,.27-15.21l-176-65.28A8,8,0,0,0,48.46,58.63l65.28,176a8,8,0,0,0,15.21-.27Z" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/></svg>`;
    }
}