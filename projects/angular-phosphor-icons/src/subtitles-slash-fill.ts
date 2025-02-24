import { Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: 'ui-icon[subtitles-slash-fill]',
  standalone: true,
})
export class UiIconSubtitlesSlashFill {

    constructor(private el: ElementRef, private renderer: Renderer2) {
        this.el.nativeElement.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"/><path d="M53.92,34.62a8,8,0,0,0-11.48-.37,8.23,8.23,0,0,0-.14,11.38L44.46,48H32A16,16,0,0,0,16,64V192a16,16,0,0,0,16,16H189.92l12.16,13.38a8,8,0,0,0,11.33.51,8.31,8.31,0,0,0,.3-11.51ZM104,128h13.19l14.54,16H104.27A8.18,8.18,0,0,1,96,136.53,8,8,0,0,1,104,128Zm-48,0H72a8,8,0,0,1,8,8.53A8.18,8.18,0,0,1,71.73,144H56.27A8.18,8.18,0,0,1,48,136.53,8,8,0,0,1,56,128Zm96,48H56.27A8.18,8.18,0,0,1,48,168.53,8,8,0,0,1,56,160h90.28l11.9,13.09A8,8,0,0,1,152,176ZM240,64V192a16,16,0,0,1-5.19,11.78,4,4,0,0,1-5.7-.24L175,144h25a8,8,0,0,0,8-8.53,8.17,8.17,0,0,0-8.25-7.47h-39.3L93.79,54.69a4,4,0,0,1,3-6.69H224A16,16,0,0,1,240,64Z"/></svg>`;
    }
}