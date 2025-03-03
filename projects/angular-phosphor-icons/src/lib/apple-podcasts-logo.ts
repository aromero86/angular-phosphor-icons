import { Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: 'ui-icon[apple-podcasts-logo]',
  standalone: true,
})
export class UiIconApplePodcastsLogo {

    constructor(private el: ElementRef, private renderer: Renderer2) {
        this.el.nativeElement.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"/><circle cx="128" cy="120" r="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/><path d="M131.56,224h-7.12a16.2,16.2,0,0,1-15.76-12.12l-12.19-48A16.06,16.06,0,0,1,112.25,144h31.5a16.06,16.06,0,0,1,15.76,19.88l-12.19,48A16.2,16.2,0,0,1,131.56,224Z" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/><path d="M66.33,145.18a64,64,0,1,1,123.34,0" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/><path d="M74.63,207.81a96,96,0,1,1,106.74,0" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/></svg>`;
    }
}