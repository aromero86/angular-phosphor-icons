import { Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: 'ui-icon[hand-grabbing-duotone]',
  standalone: true,
})
export class UiIconHandGrabbingDuotone {

    constructor(private el: ElementRef, private renderer: Renderer2) {
        this.el.nativeElement.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"/><path d="M88,120H68a20,20,0,0,0-20,20v12a80,80,0,0,0,160,0V108a20,20,0,0,0-40,0V92a20,20,0,0,0-40,0,20,20,0,0,0-40,0Z" opacity="0.2"/><path d="M128,92a20,20,0,0,0-40,0v28" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/><path d="M168,108V92a20,20,0,0,0-40,0v28" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/><path d="M88,152V120H68a20,20,0,0,0-20,20v12a80,80,0,0,0,160,0V108a20,20,0,0,0-40,0v12" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/></svg>`;
    }
}