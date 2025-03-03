import { Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: 'ui-icon[crane-tower-light]',
  standalone: true,
})
export class UiIconCraneTowerLight {

    constructor(private el: ElementRef, private renderer: Renderer2) {
        this.el.nativeElement.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"/><line x1="24" y1="216" x2="128" y2="216" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/><line x1="24" y1="88" x2="240" y2="88" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/><line x1="48" y1="152" x2="104" y2="152" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/><path d="M216,88v96a8,8,0,0,1-8,8H192a8,8,0,0,1-8-8v-8" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/><polyline points="48 216 48 40 80 40 104 88 104 216" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/></svg>`;
    }
}