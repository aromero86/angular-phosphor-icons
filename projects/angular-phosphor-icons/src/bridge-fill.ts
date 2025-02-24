import { Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: 'ui-icon[bridge-fill]',
  standalone: true,
})
export class UiIconBridgeFill {

    constructor(private el: ElementRef, private renderer: Renderer2) {
        this.el.nativeElement.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"/><path d="M232,160h-8V120.5c1.63.81,3.29,1.57,5,2.26a8,8,0,0,0,6-14.83A55.78,55.78,0,0,1,200,56a8,8,0,0,0-16,0A56,56,0,0,1,72,56a8,8,0,0,0-16,0,55.78,55.78,0,0,1-35,51.93,8,8,0,0,0,6,14.83c1.71-.69,3.37-1.45,5-2.26V160H24.6c-6.31,0-8.6,4.78-8.6,8a8,8,0,0,0,8,8H56v24a8,8,0,0,0,16,0V176H184v24a8,8,0,0,0,16,0V176h32a8,8,0,0,0,0-16ZM72,152a8,8,0,0,1-16,0V104.12a8,8,0,0,1,16,0Zm40,0a8,8,0,0,1-16,0V132.32a8,8,0,0,1,16,0Zm48,0a8,8,0,0,1-16,0V132.32a8,8,0,0,1,16,0Zm40,0a8,8,0,0,1-16,0V104.12a8,8,0,0,1,16,0Z"/></svg>`;
    }
}