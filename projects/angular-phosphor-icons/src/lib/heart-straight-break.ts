import { Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: 'ui-icon[heart-straight-break]',
  standalone: true,
})
export class UiIconHeartStraightBreak {

    constructor(private el: ElementRef, private renderer: Renderer2) {
        this.el.nativeElement.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"/><path d="M128,80.6l-18.64-18a50,50,0,0,0-70.72,70.72L128,224l89.36-90.64a50,50,0,1,0-70.72-70.72L112,96l32,32-16,16" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/></svg>`;
    }
}