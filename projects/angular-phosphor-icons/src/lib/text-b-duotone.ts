import { Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: 'ui-icon[text-b-duotone]',
  standalone: true,
})
export class UiIconTextBDuotone {

    constructor(private el: ElementRef, private renderer: Renderer2) {
        this.el.nativeElement.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"/><path d="M160,120H148a36,36,0,0,0,0-72H80V200h80a40,40,0,0,0,0-80Z" opacity="0.2"/><path d="M80,120h80a40,40,0,0,1,0,80H80V48h68a36,36,0,0,1,0,72" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/></svg>`;
    }
}