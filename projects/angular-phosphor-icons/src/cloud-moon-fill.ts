import { Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: 'ui-icon[cloud-moon-fill]',
  standalone: true,
})
export class UiIconCloudMoonFill {

    constructor(private el: ElementRef, private renderer: Renderer2) {
        this.el.nativeElement.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"/><path d="M172,72a76.35,76.35,0,0,0-12.36,1A71.93,71.93,0,0,0,104.17,9.83a8,8,0,0,0-9.59,9.58A56.05,56.05,0,0,1,40,88a56.45,56.45,0,0,1-12.59-1.42,8,8,0,0,0-9.59,9.59,72.22,72.22,0,0,0,32.29,45.06A52,52,0,0,0,92,224h80a76,76,0,0,0,0-152ZM37.37,104c.87,0,1.75,0,2.63,0a72.08,72.08,0,0,0,72-72c0-.89,0-1.78,0-2.67a55.64,55.64,0,0,1,32,48.05A76.4,76.4,0,0,0,101,120.78a52.38,52.38,0,0,0-9-.78,51.69,51.69,0,0,0-30,9.59A56.22,56.22,0,0,1,37.37,104Z"/></svg>`;
    }
}