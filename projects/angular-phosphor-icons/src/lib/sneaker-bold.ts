import { Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: 'ui-icon[sneaker-bold]',
  standalone: true,
})
export class UiIconSneakerBold {

    constructor(private el: ElementRef, private renderer: Renderer2) {
        this.el.nativeElement.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"/><path d="M32,192a8,8,0,0,0,8,8H236a8,8,0,0,0,8-8V167.06a32,32,0,0,0-21.88-30.35l-56.73-20.25A32,32,0,0,1,146.27,99.1L123,44.75a8,8,0,0,0-10-4.27L37.27,68A8,8,0,0,0,32,75.54Z" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/><line x1="32" y1="164" x2="243.85" y2="164" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/><line x1="124" y1="116" x2="150.68" y2="106.3" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/><line x1="108" y1="84" x2="135.53" y2="73.99" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/></svg>`;
    }
}