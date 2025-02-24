import { Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: 'ui-icon[address-book-fill]',
  standalone: true,
})
export class UiIconAddressBookFill {

    constructor(private el: ElementRef, private renderer: Renderer2) {
        this.el.nativeElement.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"/><path d="M160,112a24,24,0,1,1-24-24A24,24,0,0,1,160,112Zm64-72V216a16,16,0,0,1-16,16H64a16,16,0,0,1-16-16V192H32a8,8,0,0,1,0-16H48V136H32a8,8,0,0,1,0-16H48V80H32a8,8,0,0,1,0-16H48V40A16,16,0,0,1,64,24H208A16,16,0,0,1,224,40ZM190.4,163.2A67.88,67.88,0,0,0,163,141.51a40,40,0,1,0-53.94,0A67.88,67.88,0,0,0,81.6,163.2a8,8,0,1,0,12.8,9.6,52,52,0,0,1,83.2,0,8,8,0,1,0,12.8-9.6Z"/></svg>`;
    }
}