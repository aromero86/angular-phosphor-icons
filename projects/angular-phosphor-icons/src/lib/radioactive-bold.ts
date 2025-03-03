import { Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: 'ui-icon[radioactive-bold]',
  standalone: true,
})
export class UiIconRadioactiveBold {

    constructor(private el: ElementRef, private renderer: Renderer2) {
        this.el.nativeElement.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"/><circle cx="128" cy="128" r="16"/><path d="M105.77,90l-22-38a8,8,0,0,0-11.55-2.54A95.94,95.94,0,0,0,32,119.14,8.1,8.1,0,0,0,40,128H84" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/><path d="M150.23,90l22-38a8,8,0,0,1,11.55-2.54A95.94,95.94,0,0,1,224,119.14a8.1,8.1,0,0,1-8,8.86H172" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/><path d="M150,166.11l21.83,37.8a8,8,0,0,1-3.56,11.26,96.24,96.24,0,0,1-80.54,0,8,8,0,0,1-3.56-11.26L106,166.11" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/></svg>`;
    }
}