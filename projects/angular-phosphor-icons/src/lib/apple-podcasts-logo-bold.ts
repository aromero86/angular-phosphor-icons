import { Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: 'ui-icon[apple-podcasts-logo-bold]',
  standalone: true,
})
export class UiIconApplePodcastsLogoBold {

    constructor(private el: ElementRef, private renderer: Renderer2) {
        this.el.nativeElement.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"/><path d="M131.23,224h-6.46a16,16,0,0,1-15.62-12.45l-12.74-56A16,16,0,0,1,112,136H144a16,16,0,0,1,15.62,19.55l-12.74,56A16,16,0,0,1,131.23,224Z" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/><circle cx="128" cy="108" r="28" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/><path d="M65.74,201.08a96,96,0,1,1,124.52,0" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/></svg>`;
    }
}