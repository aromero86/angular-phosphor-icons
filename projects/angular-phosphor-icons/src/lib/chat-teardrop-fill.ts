import { Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: 'ui-icon[chat-teardrop-fill]',
  standalone: true,
})
export class UiIconChatTeardropFill {

    constructor(private el: ElementRef, private renderer: Renderer2) {
        this.el.nativeElement.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"/><path d="M232,124A100.11,100.11,0,0,1,132,224H48a16,16,0,0,1-16-16V124a100,100,0,0,1,200,0Z"/></svg>`;
    }
}