import { Directive, ElementRef, Renderer,HostListener,HostBinding, Input} from '@angular/core';

@Directive({
  selector: '[dirHighlight]'
})
export class HighlightDirective {
  // constructor(private elementRef:ElementRef, private renderer:Renderer) {     
  //       // this.elementRef.nativeElement.style.backgroundColor ='green';
  //       // this.elementRef.nativeElement.style.foreground = 'white';
  //        renderer.setElementStyle(elementRef.nativeElement,'background-color','red')
  // }

  @HostListener('mouseenter') mouseover(){
    this.backgroundColor=this.highlightColor;
  };
    @HostListener('mouseleave') mouseleave(){
    this.backgroundColor=this.defaultColor;
  };

      @HostListener('click',['$event']) onmouseclick(event){
        console.log(event)
    this.backgroundColor='red';
  };
  @HostBinding('style.backgroundColor') get setColor()
  {
    return this.backgroundColor;
  };
  @Input() defaultColor='white';
  @Input('dirHighlight') highlightColor:String='green';
  private backgroundColor:String=this.defaultColor;
    constructor() {     

  }

}
