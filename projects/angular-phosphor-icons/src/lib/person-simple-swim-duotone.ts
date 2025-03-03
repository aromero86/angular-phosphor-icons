import { Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: 'ui-icon[person-simple-swim-duotone]',
  standalone: true,
})
export class UiIconPersonSimpleSwimDuotone {

    constructor(private el: ElementRef, private renderer: Renderer2) {
        this.el.nativeElement.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"/><path d="M80,136c39.13-1.55,67.87,42.59,109.62,29.54l-57.46-57.46a96.1,96.1,0,0,0-13.21-11Z" opacity="0.2"/><circle cx="176" cy="72" r="24" opacity="0.2"/><circle cx="176" cy="72" r="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/><path d="M40,193.61c72-59.69,104,56.47,176-3.22" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/><path d="M40,153.61c72-59.69,104,56.47,176-3.22" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/><path d="M189.58,165.58l-57.46-57.46A96,96,0,0,0,64.24,80H40" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/><line x1="79.96" y1="136.04" x2="118.91" y2="97.09" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/></svg>`;
    }
}