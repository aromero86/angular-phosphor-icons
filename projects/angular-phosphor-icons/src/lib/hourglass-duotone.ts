import { Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: 'ui-icon[hourglass-duotone]',
  standalone: true,
})
export class UiIconHourglassDuotone {

    constructor(private el: ElementRef, private renderer: Renderer2) {
        this.el.nativeElement.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"/><path d="M128,128,67.2,82.4A8,8,0,0,1,64,76V40a8,8,0,0,1,8-8H184a8,8,0,0,1,8,8V75.64A8,8,0,0,1,188.82,82L128,128h0" opacity="0.2"/><path d="M128,128,67.2,173.6A8,8,0,0,0,64,180v36a8,8,0,0,0,8,8H184a8,8,0,0,0,8-8V180.36a8,8,0,0,0-3.18-6.38L128,128h0" opacity="0.2"/><path d="M128,128,67.2,82.4A8,8,0,0,1,64,76V40a8,8,0,0,1,8-8H184a8,8,0,0,1,8,8V75.64A8,8,0,0,1,188.82,82L128,128h0" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/><path d="M128,128,67.2,173.6A8,8,0,0,0,64,180v36a8,8,0,0,0,8,8H184a8,8,0,0,0,8-8V180.36a8,8,0,0,0-3.18-6.38L128,128h0" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/></svg>`;
    }
}