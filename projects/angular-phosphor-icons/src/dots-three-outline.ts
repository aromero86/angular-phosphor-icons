import { Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: 'ui-icon[dots-three-outline]',
  standalone: true,
})
export class UiIconDotsThreeOutline {

    constructor(private el: ElementRef, private renderer: Renderer2) {
        this.el.nativeElement.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"/><circle cx="128" cy="128" r="24" fill="none" stroke="currentColor" stroke-miterlimit="10" stroke-width="16"/><circle cx="48" cy="128" r="24" fill="none" stroke="currentColor" stroke-miterlimit="10" stroke-width="16"/><circle cx="208" cy="128" r="24" fill="none" stroke="currentColor" stroke-miterlimit="10" stroke-width="16"/></svg>`;
    }
}