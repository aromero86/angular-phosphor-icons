import { Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: 'ui-icon[calendar-heart-fill]',
  standalone: true,
})
export class UiIconCalendarHeartFill {

    constructor(private el: ElementRef, private renderer: Renderer2) {
        this.el.nativeElement.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"/><path d="M208,32H184V24a8,8,0,0,0-16,0v8H88V24a8,8,0,0,0-16,0v8H48A16,16,0,0,0,32,48V208a16,16,0,0,0,16,16H208a16,16,0,0,0,16-16V48A16,16,0,0,0,208,32ZM72,64V56a8,8,0,0,1,16,0v8a8,8,0,0,1-16,0Zm82.56,103.07a143.52,143.52,0,0,1-24.77,16.51,4,4,0,0,1-3.58,0,143.52,143.52,0,0,1-24.77-16.51C84.56,153,76,138.51,76,124a28,28,0,0,1,52-14.41A28,28,0,0,1,180,124C180,138.51,171.44,153,154.56,167.07ZM184,64a8,8,0,0,1-16,0V56a8,8,0,0,1,16,0Z"/></svg>`;
    }
}