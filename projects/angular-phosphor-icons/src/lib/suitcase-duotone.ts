import { Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: 'ui-icon[suitcase-duotone]',
  standalone: true,
})
export class UiIconSuitcaseDuotone {

    constructor(private el: ElementRef, private renderer: Renderer2) {
        this.el.nativeElement.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"/><path d="M88,64V208H40a8,8,0,0,1-8-8V72a8,8,0,0,1,8-8Z" opacity="0.2"/><path d="M168,64V208h48a8,8,0,0,0,8-8V72a8,8,0,0,0-8-8Z" opacity="0.2"/><rect x="32" y="64" width="192" height="144" rx="8" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/><path d="M168,208V48a16,16,0,0,0-16-16H104A16,16,0,0,0,88,48V208" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/></svg>`;
    }
}