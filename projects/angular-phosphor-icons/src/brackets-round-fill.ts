import { Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: 'ui-icon[brackets-round-fill]',
  standalone: true,
})
export class UiIconBracketsRoundFill {

    constructor(private el: ElementRef, private renderer: Renderer2) {
        this.el.nativeElement.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"/><path d="M216,40H40A16,16,0,0,0,24,56V200a16,16,0,0,0,16,16H216a16,16,0,0,0,16-16V56A16,16,0,0,0,216,40ZM99.61,176.86a8,8,0,0,1-7.19,14.3A71.23,71.23,0,0,1,56,128,71.23,71.23,0,0,1,92.42,64.84a8,8,0,0,1,7.18,14.3C98.37,79.78,72,93.76,72,128S98.48,176.28,99.61,176.86Zm64,14.3a8,8,0,1,1-7.16-14.32c1.1-.56,27.58-14.52,27.58-48.84s-26.48-48.28-27.61-48.86a8,8,0,0,1,7.19-14.3A71.23,71.23,0,0,1,200,128,71.23,71.23,0,0,1,163.58,191.16Z"/></svg>`;
    }
}