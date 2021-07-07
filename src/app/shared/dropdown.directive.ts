import { Directive, ElementRef, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appDropdown]'
})
export class DropdownDirective {
  // @HostListener("click",['$event']) onClick(eventData:Event){
  //   //console.log(eventData);
  //   let nextSibling = this.renderer.nextSibling(this.eleRef.nativeElement);
  //   let parentNode = this.renderer.parentNode(this.eleRef.nativeElement)
  //   console.log(parentNode,nextSibling);
  //   this.eleRef.nativeElement.nextSibling.classList.toggle('show')
  // }
  @HostListener('document:click', ['$event']) toggleOpen(event: Event) {
    //console.log(this.eleRef.nativeElement);
    let classNames = this.eleRef.nativeElement.nextSibling.className;
    console.log(classNames); 
     if(this.eleRef.nativeElement.contains(event.target)){
      this.eleRef.nativeElement.nextSibling.classList.toggle('show')
     }else{
       if(classNames.includes('show')){
        this.eleRef.nativeElement.nextSibling.classList.remove('show')
       }
     
     }
    //this.isOpen =  ? !this.isOpen : false;
  }
  constructor(private eleRef:ElementRef,private renderer:Renderer2) { }

}
