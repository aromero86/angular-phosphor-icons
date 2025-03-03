import { Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: 'ui-icon[engine-duotone]',
  standalone: true,
})
export class UiIconEngineDuotone {

    constructor(private el: ElementRef, private renderer: Renderer2) {
        this.el.nativeElement.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"/><path d="M224,176l-37.66,37.66a8,8,0,0,1-5.65,2.34H103.31a8,8,0,0,1-5.65-2.34L58.34,174.34A8,8,0,0,1,56,168.69V80a8,8,0,0,1,8-8H180.69a8,8,0,0,1,5.65,2.34L224,112h16a8,8,0,0,1,8,8v48a8,8,0,0,1-8,8Z" opacity="0.2"/><line x1="16" y1="108" x2="16" y2="172" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/><line x1="100" y1="32" x2="164" y2="32" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/><path d="M224,176l-37.66,37.66a8,8,0,0,1-5.65,2.34H103.31a8,8,0,0,1-5.65-2.34L58.34,174.34A8,8,0,0,1,56,168.69V80a8,8,0,0,1,8-8H180.69a8,8,0,0,1,5.65,2.34L224,112h16a8,8,0,0,1,8,8v48a8,8,0,0,1-8,8Z" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/><line x1="16" y1="140" x2="56" y2="140" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/><line x1="132" y1="32" x2="132" y2="72" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/></svg>`;
    }
}