import { Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: 'ui-icon[briefcase-metal-fill]',
  standalone: true,
})
export class UiIconBriefcaseMetalFill {

    constructor(private el: ElementRef, private renderer: Renderer2) {
        this.el.nativeElement.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"/><path d="M28,112H228a4,4,0,0,1,4,4v40a4,4,0,0,1-4,4H28a4,4,0,0,1-4-4V116A4,4,0,0,1,28,112Zm-4,88a16,16,0,0,0,16,16H216a16,16,0,0,0,16-16V180a4,4,0,0,0-4-4H28a4,4,0,0,0-4,4ZM232,72V92a4,4,0,0,1-4,4H28a4,4,0,0,1-4-4V72A16,16,0,0,1,40,56H80V48a24,24,0,0,1,24-24h48a24,24,0,0,1,24,24v8h40A16,16,0,0,1,232,72ZM160,48a8,8,0,0,0-8-8H104a8,8,0,0,0-8,8v8h64Z"/></svg>`;
    }
}