import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appDirectiveComposition]',
  host: { style: ':auto' },
  
})
export class DirectiveCompositionDirective {
  constructor(private el: ElementRef<HTMLElement>) {}
    // @Input()  defaultColor  = '';
    // @Input()  appHighlight = '';
    
    @HostListener("mouseenter")
     onmouseenter() :void {
       //console.log(this.defaultColor);
        this.el.nativeElement.style.color="green";
          }
    
      @HostListener("mouseleave")
      onmouseleave() :void{
       // console.log(this.appHighlight);
        this.el.nativeElement.style.color="orange";
      }
    
  }
