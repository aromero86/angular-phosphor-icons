import { Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: 'ui-icon[person-fill]',
  standalone: true,
})
export class UiIconPersonFill {

    constructor(private el: ElementRef, private renderer: Renderer2) {
        this.el.nativeElement.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"/><path d="M100,36a28,28,0,1,1,28,28A28,28,0,0,1,100,36ZM215.42,140.78l-45.25-51.3a28,28,0,0,0-21-9.48H106.83a28,28,0,0,0-21,9.48l-45.25,51.3a16,16,0,0,0,22.56,22.69L89,142.7l-19.7,74.88a16,16,0,0,0,29.08,13.35L128,180l29.58,51a16,16,0,0,0,29.08-13.35L167,142.7l25.9,20.77a16,16,0,0,0,22.56-22.69Z"/></svg>`;
    }
}