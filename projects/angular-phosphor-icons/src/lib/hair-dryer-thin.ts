import { Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: 'ui-icon[hair-dryer-thin]',
  standalone: true,
})
export class UiIconHairDryerThin {

    constructor(private el: ElementRef, private renderer: Renderer2) {
        this.el.nativeElement.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"/><circle cx="168" cy="88" r="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/><path d="M24,113.22V62.78a8,8,0,0,1,6.68-7.89L168,32a56,56,0,0,1,0,112L30.68,121.11A8,8,0,0,1,24,113.22Z" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/><path d="M152,208v8a32,32,0,0,0,32,32h16" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/><path d="M202.49,132.12l-32.36,71.19a8,8,0,0,1-7.28,4.69H144a8,8,0,0,1-8-8V138.67" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/></svg>`;
    }
}