import { Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: 'ui-icon[wrench-light]',
  standalone: true,
})
export class UiIconWrenchLight {

    constructor(private el: ElementRef, private renderer: Renderer2) {
        this.el.nativeElement.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"/><path d="M104,126.94a64,64,0,0,1,80-90.29L144,80l5.66,26.34L176,112l43.35-40a64,64,0,0,1-90.29,80L73,217A24,24,0,0,1,39,183Z" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/></svg>`;
    }
}