import { Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: 'ui-icon[dog-light]',
  standalone: true,
})
export class UiIconDogLight {

    constructor(private el: ElementRef, private renderer: Renderer2) {
        this.el.nativeElement.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"/><circle cx="92" cy="140" r="10"/><circle cx="164" cy="140" r="10"/><line x1="128" y1="192" x2="128" y2="216" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/><polyline points="144 176 128 192 112 176" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/><line x1="104" y1="48" x2="152" y2="48" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/><path d="M104,48,50.37,32.24a8,8,0,0,0-9.8,6.29l-16.42,88c-1.54,8.23,9,13,14.16,6.42Z" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/><path d="M152,48l53.63-15.76a8,8,0,0,1,9.8,6.29l16.42,88c1.54,8.23-9,13-14.16,6.42Z" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/><path d="M208,120.38V184a32,32,0,0,1-32,32H80a32,32,0,0,1-32-32V120.38" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/></svg>`;
    }
}