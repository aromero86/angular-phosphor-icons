import { Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: 'ui-icon[wind-duotone]',
  standalone: true,
})
export class UiIconWindDuotone {

    constructor(private el: ElementRef, private renderer: Renderer2) {
        this.el.nativeElement.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"/><circle cx="120" cy="72" r="24" opacity="0.2"/><circle cx="208" cy="104" r="24" opacity="0.2"/><circle cx="152" cy="184" r="24" opacity="0.2"/><path d="M128,192c3.39,9.15,13.67,16,24,16a24,24,0,0,0,0-48H40" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/><path d="M96,64c3.39-9.15,13.67-16,24-16a24,24,0,0,1,0,48H24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/><path d="M184,96c3.39-9.15,13.67-16,24-16a24,24,0,0,1,0,48H32" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/></svg>`;
    }
}