import { Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: 'ui-icon[paperclip-horizontal-fill]',
  standalone: true,
})
export class UiIconPaperclipHorizontalFill {

    constructor(private el: ElementRef, private renderer: Renderer2) {
        this.el.nativeElement.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"/><path d="M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm40,144H72a24,24,0,0,1,0-48h96a8,8,0,0,1,0,16H72a8,8,0,0,0,0,16h96a24,24,0,0,0,0-48H96a8,8,0,0,1,0-16h72a40,40,0,0,1,0,80Z"/></svg>`;
    }
}