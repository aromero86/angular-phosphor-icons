import { Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: 'ui-icon[arrow-fat-lines-up-fill]',
  standalone: true,
})
export class UiIconArrowFatLinesUpFill {

    constructor(private el: ElementRef, private renderer: Renderer2) {
        this.el.nativeElement.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"/><path d="M231.39,123.06A8,8,0,0,1,224,128H184v24a8,8,0,0,1-8,8H80a8,8,0,0,1-8-8V128H32a8,8,0,0,1-5.66-13.66l96-96a8,8,0,0,1,11.32,0l96,96A8,8,0,0,1,231.39,123.06ZM176,208H80a8,8,0,0,0,0,16h96a8,8,0,0,0,0-16Zm0-32H80a8,8,0,0,0,0,16h96a8,8,0,0,0,0-16Z"/></svg>`;
    }
}