import { Directive, ElementRef, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appDropdown]'
})
export class DropdownDirective {
  @HostListener("click",['$event']) onClick(eventData:Event){
    //console.log(eventData);
    let nextSibling = this.renderer.nextSibling(this.eleRef.nativeElement);
    let parentNode = this.renderer.parentNode(this.eleRef.nativeElement)
    console.log(parentNode,nextSibling);
    this.eleRef.nativeElement.nextSibling.classList.toggle('show')
  }
  constructor(private eleRef:ElementRef,private renderer:Renderer2) { }

}
