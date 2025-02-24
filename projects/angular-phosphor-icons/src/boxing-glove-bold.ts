import { Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: 'ui-icon[boxing-glove-bold]',
  standalone: true,
})
export class UiIconBoxingGloveBold {

    constructor(private el: ElementRef, private renderer: Renderer2) {
        this.el.nativeElement.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"/><path d="M72,104V72a48,48,0,0,1,48-48h48a48,48,0,0,1,48,48v46.88a7.85,7.85,0,0,1-.31,2.2L200,176v40a8,8,0,0,1-8,8H80a8,8,0,0,1-8-8V176L33.75,138.19a8,8,0,0,1-1.75-5V104A24,24,0,0,1,56,80H72" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/><line x1="112" y1="152" x2="160" y2="184" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/><line x1="160" y1="152" x2="112" y2="184" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/></svg>`;
    }
}