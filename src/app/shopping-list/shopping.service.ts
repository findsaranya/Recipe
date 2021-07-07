import { EventEmitter, Injectable } from '@angular/core';
import { Recipe } from '../recipes/recipe.model';
import { Ingredient } from '../shared/ingredients.model';
@Injectable({
  providedIn: 'root'
})
export class ShoppingService {
  private ingredients :Ingredient[]=[
    new Ingredient('Mushroom',5),
    new Ingredient('Avacados',10),
    new Ingredient('Celery',29)
  ];
  addIngredients = new EventEmitter<Ingredient[]>();
  //addSelectedRecipe = new EventEmitter<Recipe>();
  constructor() { }
  getIngredients(){
    return this.ingredients.slice();
  }
  addNewIngredients(ingredient:Ingredient){
    this.ingredients.push(ingredient);
    this.addIngredients.emit(this.ingredients.slice());
  }
  pushIngredients(ingredients:Ingredient[]){
    this.ingredients.push(...ingredients);
    this.addIngredients.emit(this.ingredients.slice());
  }
}
