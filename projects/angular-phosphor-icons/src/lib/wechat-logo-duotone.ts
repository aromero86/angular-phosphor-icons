import { Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: 'ui-icon[wechat-logo-duotone]',
  standalone: true,
})
export class UiIconWechatLogoDuotone {

    constructor(private el: ElementRef, private renderer: Renderer2) {
        this.el.nativeElement.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"/><path d="M88,152a72,72,0,0,1,72-72c1.32,0,2.63,0,3.94.11h0A72,72,0,1,0,32.5,138l-8.16,27.76a8,8,0,0,0,9.93,9.93L62,167.5a71.53,71.53,0,0,0,30,8.39h0A71.83,71.83,0,0,1,88,152Z" opacity="0.2"/><circle cx="132" cy="140" r="12"/><circle cx="188" cy="140" r="12"/><path d="M160,224a72,72,0,1,1,63.5-38l8.16,27.76a8,8,0,0,1-9.93,9.93L194,215.5A71.75,71.75,0,0,1,160,224Z" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/><path d="M92.06,175.89a71.53,71.53,0,0,1-30-8.39l-27.76,8.16a8,8,0,0,1-9.93-9.93L32.5,138A72,72,0,1,1,163.94,80.11" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/></svg>`;
    }
}