import { Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: 'ui-icon[wechat-logo-fill]',
  standalone: true,
})
export class UiIconWechatLogoFill {

    constructor(private el: ElementRef, private renderer: Renderer2) {
        this.el.nativeElement.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"/><path d="M232.07,186.76A80,80,0,0,0,169.58,72.59,80,80,0,1,0,23.93,138.76l-7.27,24.71a16,16,0,0,0,19.87,19.87l24.71-7.27a79,79,0,0,0,25.19,7.35,80,80,0,0,0,108.33,40.65l24.71,7.27a16,16,0,0,0,19.87-19.87ZM132,152a12,12,0,1,1,12-12A12,12,0,0,1,132,152Zm-52,0a80.32,80.32,0,0,0,1.3,14.3,63.45,63.45,0,0,1-15.49-5.85,8,8,0,0,0-6-.63L32,168l8.17-27.76a8,8,0,0,0-.63-6A64,64,0,0,1,151.68,72.43,80.12,80.12,0,0,0,80,152Zm108,0a12,12,0,1,1,12-12A12,12,0,0,1,188,152Z"/></svg>`;
    }
}