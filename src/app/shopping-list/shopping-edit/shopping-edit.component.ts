import { Component, ElementRef, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { Recipe } from 'src/app/recipes/recipe.model';
import { Ingredient } from 'src/app/shared/ingredients.model';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {
 @ViewChild('amountInput') amount:ElementRef;
 @ViewChild('ingText') ingredientName :ElementRef;
 @Output() addIngredient = new EventEmitter<Ingredient>();
  constructor() { }

  ngOnInit(): void {
  }
  onSubmit(){
    //console.log(el1.value,el2.value);
    console.log(typeof this.amount.nativeElement.vaue);
    this.addIngredient.emit({
      name:this.ingredientName.nativeElement.value,
      amount : Number(this.amount.nativeElement.vaue)
    })

  }

}
