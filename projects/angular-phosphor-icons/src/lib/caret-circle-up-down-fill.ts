import { Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: 'ui-icon[caret-circle-up-down-fill]',
  standalone: true,
})
export class UiIconCaretCircleUpDownFill {

    constructor(private el: ElementRef, private renderer: Renderer2) {
        this.el.nativeElement.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"/><path d="M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm37.66,133.66-32,32a8,8,0,0,1-11.32,0l-32-32a8,8,0,0,1,11.32-11.32L128,172.69l26.34-26.35a8,8,0,0,1,11.32,11.32Zm0-48a8,8,0,0,1-11.32,0L128,83.31l-26.34,26.35A8,8,0,0,1,90.34,98.34l32-32a8,8,0,0,1,11.32,0l32,32A8,8,0,0,1,165.66,109.66Z"/></svg>`;
    }
}