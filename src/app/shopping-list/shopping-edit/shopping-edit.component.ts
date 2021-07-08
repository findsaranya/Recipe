import { Component, ElementRef, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Recipe } from 'src/app/recipes/recipe.model';
import { Ingredient } from 'src/app/shared/ingredients.model';
import { ShoppingService } from '../shopping.service';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {
 
 @ViewChild('form')shopping:NgForm;
 
  constructor(private shoppingService:ShoppingService) { }

  ngOnInit(): void {
  }
  onSubmit(){
    //console.log(this.shopping.value);
    let {name,amount}  = this.shopping.value;
    
    //console.log(el1.value,el2.value);
    // console.log(typeof this.amount.nativeElement.value);
     const newIngredient = new Ingredient(
       name,amount
       )
        this.shoppingService.addNewIngredients(newIngredient);
        this.shopping.reset();
    //this.addIngredient.emit(newIngredient);

  }

}
