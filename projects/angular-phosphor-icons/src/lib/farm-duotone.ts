import { Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: 'ui-icon[farm-duotone]',
  standalone: true,
})
export class UiIconFarmDuotone {

    constructor(private el: ElementRef, private renderer: Renderer2) {
        this.el.nativeElement.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"/><path d="M144,32,80,80v46.14a253.72,253.72,0,0,1,40,12.5l0,0V96h48v32.08a254.67,254.67,0,0,1,40-7V80Z" opacity="0.2"/><path d="M24,216V120a255.5,255.5,0,0,1,199.85,96Z" opacity="0.2"/><path d="M128,142a255,255,0,0,1,104-22" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/><path d="M164.89,162.23A223.75,223.75,0,0,1,232,152" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/><path d="M196.89,187.2A193.47,193.47,0,0,1,232,184" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/><path d="M24,184a191.09,191.09,0,0,1,106.17,32" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/><path d="M24,152a223.28,223.28,0,0,1,156.77,64" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/><path d="M24,120a255.5,255.5,0,0,1,199.85,96" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/><polyline points="80 126.14 80 80 144 32 208 80 208 121.11" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/><polyline points="120 138.61 120 96 168 96 168 128.06" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/></svg>`;
    }
}