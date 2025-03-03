import { Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: 'ui-icon[door-open-duotone]',
  standalone: true,
})
export class UiIconDoorOpenDuotone {

    constructor(private el: ElementRef, private renderer: Renderer2) {
        this.el.nativeElement.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"/><path d="M168,32V224h32V40a8,8,0,0,0-8-8Z" opacity="0.2"/><line x1="24" y1="224" x2="232" y2="224" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/><path d="M56,224V40a8,8,0,0,1,8-8H192a8,8,0,0,1,8,8V224" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/><circle cx="132" cy="132" r="12"/><line x1="168" y1="32" x2="168" y2="224" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/></svg>`;
    }
}