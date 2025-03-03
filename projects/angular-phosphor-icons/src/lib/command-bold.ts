import { Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: 'ui-icon[command-bold]',
  standalone: true,
})
export class UiIconCommandBold {

    constructor(private el: ElementRef, private renderer: Renderer2) {
        this.el.nativeElement.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"/><path d="M180,48h0a28,28,0,0,1,28,28v0a28,28,0,0,1-28,28H152a0,0,0,0,1,0,0V76a28,28,0,0,1,28-28Z" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/><path d="M48,48H76a28,28,0,0,1,28,28v0a28,28,0,0,1-28,28h0A28,28,0,0,1,48,76V48A0,0,0,0,1,48,48Z" transform="translate(152 152) rotate(180)" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/><path d="M152,152h28a28,28,0,0,1,28,28v0a28,28,0,0,1-28,28h0a28,28,0,0,1-28-28V152A0,0,0,0,1,152,152Z" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/><path d="M76,152h0a28,28,0,0,1,28,28v0a28,28,0,0,1-28,28H48a0,0,0,0,1,0,0V180A28,28,0,0,1,76,152Z" transform="translate(152 360) rotate(-180)" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/><rect x="104" y="104" width="48" height="48" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/></svg>`;
    }
}