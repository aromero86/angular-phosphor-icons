import { Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: 'ui-icon[not-member-of-fill]',
  standalone: true,
})
export class UiIconNotMemberOfFill {

    constructor(private el: ElementRef, private renderer: Renderer2) {
        this.el.nativeElement.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"/><path d="M208,32H48A16,16,0,0,0,32,48V208a16,16,0,0,0,16,16H208a16,16,0,0,0,16-16V48A16,16,0,0,0,208,32ZM190,69.27,145.63,120H176a8,8,0,0,1,0,16H131.63l-28.76,32.87A47.72,47.72,0,0,0,128,176h48a8,8,0,0,1,0,16H128a63.62,63.62,0,0,1-35.78-11L78,197.27a8,8,0,0,1-12-10.54l14.21-16.24A64,64,0,0,1,128,64h45.37L178,58.73a8,8,0,1,1,12,10.54ZM128,80h31.37l-35,40H80.68A48.07,48.07,0,0,1,128,80ZM80.68,136h29.69L90.84,158.32A47.78,47.78,0,0,1,80.68,136Z"/></svg>`;
    }
}