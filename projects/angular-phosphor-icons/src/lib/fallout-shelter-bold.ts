import { Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: 'ui-icon[fallout-shelter-bold]',
  standalone: true,
})
export class UiIconFalloutShelterBold {

    constructor(private el: ElementRef, private renderer: Renderer2) {
        this.el.nativeElement.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"/><circle cx="128" cy="128" r="96" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/><path d="M162.58,78.34A12,12,0,0,0,152,72H104A12,12,0,0,0,94,90.66l24,36a12,12,0,0,0,20,0l24-36A12,12,0,0,0,162.58,78.34Z"/><path d="M194.58,126.34A12,12,0,0,0,184,120H136a12,12,0,0,0-10,18.66l24,36a12,12,0,0,0,20,0l24-36A12,12,0,0,0,194.58,126.34Z"/><path d="M130.58,126.34A12,12,0,0,0,120,120H72a12,12,0,0,0-10,18.66l24,36a12,12,0,0,0,20,0l24-36A12,12,0,0,0,130.58,126.34Z"/></svg>`;
    }
}