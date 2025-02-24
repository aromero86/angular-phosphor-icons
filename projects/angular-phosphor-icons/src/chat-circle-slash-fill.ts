import { Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: 'ui-icon[chat-circle-slash-fill]',
  standalone: true,
})
export class UiIconChatCircleSlashFill {

    constructor(private el: ElementRef, private renderer: Renderer2) {
        this.el.nativeElement.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"/><path d="M213.92,210.62a8,8,0,1,1-11.84,10.76l-10.26-11.29a104,104,0,0,1-112.7,9.73L45.07,231.17a16,16,0,0,1-20.24-20.24l11.35-34.05A104.06,104.06,0,0,1,52.33,56.66L42.08,45.38A8,8,0,1,1,53.92,34.62ZM128,24a103.39,103.39,0,0,0-40.33,8.11,8,8,0,0,0-2.81,12.75l121.8,134a8,8,0,0,0,13-1.59A104,104,0,0,0,128,24Z"/></svg>`;
    }
}