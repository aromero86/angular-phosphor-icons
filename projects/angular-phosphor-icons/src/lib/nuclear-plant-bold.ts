import { Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: 'ui-icon[nuclear-plant-bold]',
  standalone: true,
})
export class UiIconNuclearPlantBold {

    constructor(private el: ElementRef, private renderer: Renderer2) {
        this.el.nativeElement.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"/><path d="M152,12a48,48,0,0,0-47.34,40" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/><path d="M148,52h4a40,40,0,0,0,40-40h0" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/><line x1="16" y1="216" x2="240" y2="216" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/><path d="M128.15,92h40a8,8,0,0,1,8,7.63c2.37,51.77,28,100,37.56,116.37" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/><path d="M39.69,216C53,189.23,70.12,146.16,71.86,99.64a8,8,0,0,1,8-7.64h48.3a8,8,0,0,1,8,7.64c1.74,46.52,18.9,89.59,32.17,116.36" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/></svg>`;
    }
}