import { Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: 'ui-icon[dots-nine-thin]',
  standalone: true,
})
export class UiIconDotsNineThin {

    constructor(private el: ElementRef, private renderer: Renderer2) {
        this.el.nativeElement.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"/><circle cx="60" cy="60" r="8"/><circle cx="128" cy="60" r="8"/><circle cx="196" cy="60" r="8"/><circle cx="60" cy="128" r="8"/><circle cx="128" cy="128" r="8"/><circle cx="196" cy="128" r="8"/><circle cx="60" cy="196" r="8"/><circle cx="128" cy="196" r="8"/><circle cx="196" cy="196" r="8"/></svg>`;
    }
}