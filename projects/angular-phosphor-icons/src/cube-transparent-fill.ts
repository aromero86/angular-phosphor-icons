import { Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: 'ui-icon[cube-transparent-fill]',
  standalone: true,
})
export class UiIconCubeTransparentFill {

    constructor(private el: ElementRef, private renderer: Renderer2) {
        this.el.nativeElement.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"/><path d="M104,152V104h48v48ZM32,53v95a4,4,0,0,0,4,4H88V99.31L38.83,50.14A4,4,0,0,0,32,53Zm188,51H168v52.69l49.17,49.17A4,4,0,0,0,224,203V108A4,4,0,0,0,220,104ZM152,36a4,4,0,0,0-4-4H53a4,4,0,0,0-2.83,6.83L99.31,88H152Zm60.49,45.17L174.83,43.51A4,4,0,0,0,168,46.34V88h41.66A4,4,0,0,0,212.49,81.17ZM156.69,168H104v52a4,4,0,0,0,4,4h95a4,4,0,0,0,2.83-6.83ZM43.51,174.83l37.66,37.66A4,4,0,0,0,88,209.66V168H46.34A4,4,0,0,0,43.51,174.83Z"/></svg>`;
    }
}