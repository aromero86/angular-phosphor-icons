import { Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: 'ui-icon[spinner-ball-duotone]',
  standalone: true,
})
export class UiIconSpinnerBallDuotone {

    constructor(private el: ElementRef, private renderer: Renderer2) {
        this.el.nativeElement.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"/><g opacity="0.2"><path d="M78.6,45.67A96,96,0,0,0,32,128c0,.54,0,1.08,0,1.61,39.27-29.85,67.64-15.73,96-1.61C126,96.38,124.09,64.75,78.6,45.67Z"/><path d="M81.4,212a96,96,0,0,0,94.6-.81c.47-.27.94-.53,1.4-.81C131.91,191.25,130,159.62,128,128,101.59,145.5,75.18,163,81.4,212Z"/><path d="M224,126.39a96,96,0,0,0-48-81.53l-1.4-.81C180.82,93,154.41,110.5,128,128,156.36,142.12,184.73,156.24,224,126.39Z"/></g><circle cx="128" cy="128" r="96" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/><path d="M32,129.61c78.55-59.69,113.45,56.47,192-3.22" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/><path d="M177.4,210.33c-91-38.17-7.82-126.49-98.8-164.66" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/><path d="M174.6,44.05C187,141.93,69,114.07,81.4,212" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/></svg>`;
    }
}