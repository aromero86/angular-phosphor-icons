import { Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: 'ui-icon[waves-duotone]',
  standalone: true,
})
export class UiIconWavesDuotone {

    constructor(private el: ElementRef, private renderer: Renderer2) {
        this.el.nativeElement.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"/><path d="M40,73.61c72-59.69,104,56.47,176-3.22v112c-72,59.69-104-56.47-176,3.22Z" opacity="0.2"/><path d="M40,185.61c72-59.69,104,56.47,176-3.22" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/><path d="M40,129.61c72-59.69,104,56.47,176-3.22" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/><path d="M40,73.61c72-59.69,104,56.47,176-3.22" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/></svg>`;
    }
}