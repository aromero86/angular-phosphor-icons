import { Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: 'ui-icon[dribbble-logo-bold]',
  standalone: true,
})
export class UiIconDribbbleLogoBold {

    constructor(private el: ElementRef, private renderer: Renderer2) {
        this.el.nativeElement.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"/><circle cx="128" cy="128" r="96" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/><path d="M71,205.27A159.93,159.93,0,0,1,208,128c5.39,0,10.73.27,16,.79" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/><path d="M188,53.09A159.69,159.69,0,0,1,64,112a161.14,161.14,0,0,1-30.16-2.84" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/><path d="M85.93,41.69a159.91,159.91,0,0,1,79,138,160.45,160.45,0,0,1-4.73,38.78" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/></svg>`;
    }
}