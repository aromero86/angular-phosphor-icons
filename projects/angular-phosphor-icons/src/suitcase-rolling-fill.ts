import { Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: 'ui-icon[suitcase-rolling-fill]',
  standalone: true,
})
export class UiIconSuitcaseRollingFill {

    constructor(private el: ElementRef, private renderer: Renderer2) {
        this.el.nativeElement.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"/><path d="M192,48H168V24A24,24,0,0,0,144,0H112A24,24,0,0,0,88,24V48H64A16,16,0,0,0,48,64V208a16,16,0,0,0,16,16H80v16a8,8,0,0,0,16,0V224h64v16a8,8,0,0,0,16,0V224h16a16,16,0,0,0,16-16V64A16,16,0,0,0,192,48ZM96,192a8,8,0,0,1-16,0V80a8,8,0,0,1,16,0Zm40,0a8,8,0,0,1-16,0V80a8,8,0,0,1,16,0ZM152,48H104V24a8,8,0,0,1,8-8h32a8,8,0,0,1,8,8Zm24,144a8,8,0,0,1-16,0V80a8,8,0,0,1,16,0Z"/></svg>`;
    }
}