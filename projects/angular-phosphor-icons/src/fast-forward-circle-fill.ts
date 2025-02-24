import { Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: 'ui-icon[fast-forward-circle-fill]',
  standalone: true,
})
export class UiIconFastForwardCircleFill {

    constructor(private el: ElementRef, private renderer: Renderer2) {
        this.el.nativeElement.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"/><path d="M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm68.8,110.4-48,36A8,8,0,0,1,144,172a8,8,0,0,1-8-8V128a8,8,0,0,1-3.2,6.4l-48,36A8,8,0,0,1,80,172a8,8,0,0,1-8-8V92a8,8,0,0,1,12.8-6.4l48,36A8,8,0,0,1,136,128V92a8,8,0,0,1,12.8-6.4l48,36a8,8,0,0,1,0,12.8Z"/></svg>`;
    }
}