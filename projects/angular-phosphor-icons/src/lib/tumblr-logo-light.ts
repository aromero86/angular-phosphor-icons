import { Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: 'ui-icon[tumblr-logo-light]',
  standalone: true,
})
export class UiIconTumblrLogoLight {

    constructor(private el: ElementRef, private renderer: Renderer2) {
        this.el.nativeElement.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"/><path d="M192,184v48H152a56,56,0,0,1-56-56V112H64V72h0a48,48,0,0,0,48-48h32V72h48v40H144v56a16,16,0,0,0,16,16Z" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/></svg>`;
    }
}