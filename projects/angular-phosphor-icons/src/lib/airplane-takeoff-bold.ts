import { Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: 'ui-icon[airplane-takeoff-bold]',
  standalone: true,
})
export class UiIconAirplaneTakeoffBold {

    constructor(private el: ElementRef, private renderer: Renderer2) {
        this.el.nativeElement.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"/><line x1="24" y1="216" x2="168" y2="216" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/><path d="M88,112.51,58.65,84a8,8,0,0,1,2.2-13.3L68,68l57.53,21.17,54.84-32.75a32,32,0,0,1,41,7.32L240,87.64l-147.41,88a32,32,0,0,1-38-4.32L18.53,136a8,8,0,0,1,2.32-13.19L24,121.27,55.79,132Z" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/></svg>`;
    }
}