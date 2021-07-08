import { Component, ElementRef, EventEmitter, OnDestroy, OnInit, Output, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs';
import { Recipe } from 'src/app/recipes/recipe.model';
import { Ingredient } from 'src/app/shared/ingredients.model';
import { ShoppingService } from '../shopping.service';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit,OnDestroy {
 
 @ViewChild('form')shopping:NgForm;
 
  constructor(private shoppingService:ShoppingService) { }
  editIdSubscription : Subscription;
  editIndex : number;
  editMode : boolean = false;
ingredienttoEdit : Ingredient;
  ngOnInit(): void {
    //console.log(this.editMode);
    this.editIdSubscription = this.shoppingService.editinglist
    .subscribe((id:number) => {
        this.editMode = true;
        //console.log(this.editMode);
        this.editIndex = id;
        this.ingredienttoEdit = this.shoppingService.getAIngredient(this.editIndex);
        this.shopping.setValue({
           name:this.ingredienttoEdit.name,
           amount:this.ingredienttoEdit.amount
        });
    } )
  }
  ngOnDestroy(){
    this.editIdSubscription.unsubscribe();
  }
  onSubmit(){
    //console.log(this.shopping);
    let {name,amount}  = this.shopping.value;
    
    //console.log(el1.value,el2.value);
    // console.log(typeof this.amount.nativeElement.value);
     const newIngredient = new Ingredient(
       name,amount
       )
       if(this.editMode){
         this.shoppingService.upgradeIngrdient(this.editIndex,newIngredient);
       }else{
        this.shoppingService.addNewIngredients(newIngredient);
        
       }
       this.editMode = false;
       this.shopping.reset();
        
    //this.addIngredient.emit(newIngredient);

  }
  onClear(){
    this.shopping.reset();
    this.editMode = false;
  }

}
