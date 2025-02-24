import { Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: 'ui-icon[star-of-david-fill]',
  standalone: true,
})
export class UiIconStarOfDavidFill {

    constructor(private el: ElementRef, private renderer: Renderer2) {
        this.el.nativeElement.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"/><path d="M201.21,128,231,76A8,8,0,0,0,224,64H164.65L135,12a8,8,0,0,0-13.9,0L91.33,64H32a8,8,0,0,0-6.95,12l29.72,52L25.05,180a8,8,0,0,0,7,12H91.33l29.72,52a8,8,0,0,0,13.9,0l29.7-52H224A8,8,0,0,0,231,180Zm-18.42,0-27.42,48-54.75,0L73.2,128l27.42-48,54.75,0Z"/></svg>`;
    }
}