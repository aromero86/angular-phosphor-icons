import { Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: 'ui-icon[text-strikethrough-bold]',
  standalone: true,
})
export class UiIconTextStrikethroughBold {

    constructor(private el: ElementRef, private renderer: Renderer2) {
        this.el.nativeElement.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"/><line x1="40" y1="128" x2="216" y2="128" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/><path d="M72,168c0,22.09,25.07,40,56,40s56-17.91,56-40c0-23.77-21.62-33-45.6-40" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/><path d="M75.11,88c0-22.09,22-40,52.89-40,23,0,40.24,9.87,48,24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/></svg>`;
    }
}