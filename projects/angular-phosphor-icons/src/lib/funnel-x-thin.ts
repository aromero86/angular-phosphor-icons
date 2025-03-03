import { Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: 'ui-icon[funnel-x-thin]',
  standalone: true,
})
export class UiIconFunnelXThin {

    constructor(private el: ElementRef, private renderer: Renderer2) {
        this.el.nativeElement.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"/><path d="M34.1,61.38A8,8,0,0,1,40,48H216a8,8,0,0,1,5.92,13.38L152,136v58.65a8,8,0,0,1-3.56,6.66l-32,21.33A8,8,0,0,1,104,216V136Z" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/><line x1="192" y1="168" x2="240" y2="216" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/><line x1="240" y1="168" x2="192" y2="216" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/></svg>`;
    }
}