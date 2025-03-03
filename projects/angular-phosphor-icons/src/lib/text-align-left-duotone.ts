import { Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: 'ui-icon[text-align-left-duotone]',
  standalone: true,
})
export class UiIconTextAlignLeftDuotone {

    constructor(private el: ElementRef, private renderer: Renderer2) {
        this.el.nativeElement.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"/><line x1="40" y1="64" x2="216" y2="64" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/><line x1="40" y1="104" x2="168" y2="104" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/><line x1="40" y1="144" x2="216" y2="144" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/><line x1="40" y1="184" x2="168" y2="184" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/><path d="M40,64H216a0,0,0,0,1,0,0V168a16,16,0,0,1-16,16H40a0,0,0,0,1,0,0V64A0,0,0,0,1,40,64Z" opacity="0.2"/></svg>`;
    }
}