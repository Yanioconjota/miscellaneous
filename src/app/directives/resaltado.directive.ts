import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appResaltado]'
})
export class ResaltadoDirective {
  
  @Input('appResaltado') nuevoColor: string;

  constructor(private el: ElementRef) {
    console.log('directiva llamada!');
    //el.nativeElement.style.backgroundColor = 'yellow';
  }

  @HostListener('mouseenter') mouseenter(){
    console.log(this.nuevoColor);
    
    this.resaltar(this.nuevoColor || 'yellow');
  }

  @HostListener('mouseleave') mouseleave() {
    this.resaltar(null);
  }

  private resaltar(color: string){
    this.el.nativeElement.style.backgroundColor = color;
  }

}
