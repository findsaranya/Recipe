import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {
 @ViewChild('amountInput') amount:ElementRef;
 @ViewChild('inputText') ingredientName :ElementRef;
  constructor() { }

  ngOnInit(): void {
  }
  onSubmit(el1:HTMLInputElement,el2:HTMLInputElement){
    console.log(el1.value,el2.value);
    console.log(this.amount.nativeElement.value,this.ingredientName.nativeElement.value);
  }

}
