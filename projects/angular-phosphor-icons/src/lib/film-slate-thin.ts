import { Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: 'ui-icon[film-slate-thin]',
  standalone: true,
})
export class UiIconFilmSlateThin {

    constructor(private el: ElementRef, private renderer: Renderer2) {
        this.el.nativeElement.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"/><path d="M40,112H216a0,0,0,0,1,0,0v88a8,8,0,0,1-8,8H48a8,8,0,0,1-8-8V112A0,0,0,0,1,40,112Z" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/><path d="M40.43,112,208,67.77l-8.16-30a7.9,7.9,0,0,0-9.66-5.49L37.85,72.47A7.76,7.76,0,0,0,32.27,82Z" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/><line x1="67.71" y1="64.59" x2="115.5" y2="92.19" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/><line x1="126.61" y1="49.05" x2="174.4" y2="76.64" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/></svg>`;
    }
}