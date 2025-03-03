import { Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: 'ui-icon[wind-bold]',
  standalone: true,
})
export class UiIconWindBold {

    constructor(private el: ElementRef, private renderer: Renderer2) {
        this.el.nativeElement.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"/><path d="M101.22,52A27.1,27.1,0,0,1,120,44a24,24,0,0,1,0,48H24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/><path d="M189.22,88A27.1,27.1,0,0,1,208,80a24,24,0,0,1,0,48H32" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/><path d="M133.22,204A27.1,27.1,0,0,0,152,212a24,24,0,0,0,0-48H40" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/></svg>`;
    }
}