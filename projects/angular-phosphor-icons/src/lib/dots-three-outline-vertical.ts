import { Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: 'ui-icon[dots-three-outline-vertical]',
  standalone: true,
})
export class UiIconDotsThreeOutlineVertical {

    constructor(private el: ElementRef, private renderer: Renderer2) {
        this.el.nativeElement.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"/><circle cx="128" cy="128" r="24" fill="none" stroke="currentColor" stroke-miterlimit="10" stroke-width="16"/><circle cx="128" cy="48" r="24" fill="none" stroke="currentColor" stroke-miterlimit="10" stroke-width="16"/><circle cx="128" cy="208" r="24" fill="none" stroke="currentColor" stroke-miterlimit="10" stroke-width="16"/></svg>`;
    }
}