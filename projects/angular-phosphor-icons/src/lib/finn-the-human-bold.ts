import { Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: 'ui-icon[finn-the-human-bold]',
  standalone: true,
})
export class UiIconFinnTheHumanBold {

    constructor(private el: ElementRef, private renderer: Renderer2) {
        this.el.nativeElement.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"/><rect x="56" y="108" width="144" height="80" rx="40" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/><circle cx="96" cy="148" r="16"/><circle cx="160" cy="148" r="16"/><path d="M20,72a24,24,0,0,1,48,0H188a24,24,0,0,1,48,0v76a76,76,0,0,1-76,76H96a76,76,0,0,1-76-76Z" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/></svg>`;
    }
}