import { Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: 'ui-icon[numpad-bold]',
  standalone: true,
})
export class UiIconNumpadBold {

    constructor(private el: ElementRef, private renderer: Renderer2) {
        this.el.nativeElement.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"/><circle cx="64" cy="48" r="20"/><circle cx="128" cy="48" r="20"/><circle cx="192" cy="48" r="20"/><circle cx="64" cy="104" r="20"/><circle cx="128" cy="104" r="20"/><circle cx="192" cy="104" r="20"/><circle cx="64" cy="160" r="20"/><circle cx="128" cy="160" r="20"/><circle cx="128" cy="216" r="20"/><circle cx="192" cy="160" r="20"/></svg>`;
    }
}