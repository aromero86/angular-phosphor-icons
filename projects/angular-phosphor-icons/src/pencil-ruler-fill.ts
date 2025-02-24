import { Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: 'ui-icon[pencil-ruler-fill]',
  standalone: true,
})
export class UiIconPencilRulerFill {

    constructor(private el: ElementRef, private renderer: Renderer2) {
        this.el.nativeElement.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"/><path d="M224,48V208a16,16,0,0,1-16,16H160a16,16,0,0,1-16-16V180a4,4,0,0,1,4-4h36a8,8,0,0,0,8-8.53,8.18,8.18,0,0,0-8.25-7.47H148a4,4,0,0,1-4-4V140a4,4,0,0,1,4-4h36a8,8,0,0,0,8-8.53,8.18,8.18,0,0,0-8.25-7.47H148a4,4,0,0,1-4-4V100a4,4,0,0,1,4-4h36a8,8,0,0,0,8-8.53A8.18,8.18,0,0,0,183.73,80H148a4,4,0,0,1-4-4V48a16,16,0,0,1,16-16h48A16,16,0,0,1,224,48ZM109.66,58.34A8,8,0,0,1,112,64V208a16,16,0,0,1-16,16H48a16,16,0,0,1-16-16V64a8,8,0,0,1,2.34-5.66l32-32a8,8,0,0,1,11.32,0ZM48,80V184H64V80Zm32,0V184H96V80ZM51.31,64H92.69L72,43.31Z"/></svg>`;
    }
}