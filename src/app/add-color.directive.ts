import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appAddColor]',
})
export class AddColorDirective {
  constructor(private elem: ElementRef) {}

  @HostListener('mouseenter') onMouseEnter() {
    this.hoverColor('red');
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.hoverColor('none');
  }

  private hoverColor(color: string) {
    this.elem.nativeElement.style.color = color;
  }
}
