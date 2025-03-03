import { Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: 'ui-icon[signature-bold]',
  standalone: true,
})
export class UiIconSignatureBold {

    constructor(private el: ElementRef, private renderer: Renderer2) {
        this.el.nativeElement.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"/><line x1="24" y1="176" x2="232" y2="176" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/><path d="M24,224S139.6,32,78,32c-45.84,0-46.41,184.91,50,64,0,0,16,77.43,56,16,0,0,0,24,48,24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/></svg>`;
    }
}