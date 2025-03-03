import { Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: 'ui-icon[security-camera-bold]',
  standalone: true,
})
export class UiIconSecurityCameraBold {

    constructor(private el: ElementRef, private renderer: Renderer2) {
        this.el.nativeElement.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"/><line x1="244" y1="144" x2="244" y2="192" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/><line x1="192" y1="44.69" x2="60.69" y2="176" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/><path d="M165.66,141.66l24,24a8,8,0,0,0,5.65,2.34H244" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/><path d="M15,158.93A10,10,0,0,0,22,176H60.69l29.65,29.66a8,8,0,0,0,11.32,0l120-120a8,8,0,0,0,0-11.32l-56-56a8,8,0,0,0-11.32,0Z" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/></svg>`;
    }
}