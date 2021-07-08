import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
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
  addIngredients = new Subject<Ingredient[]>();
  editinglist = new Subject<number>();
  //addSelectedRecipe = new EventEmitter<Recipe>();
  constructor() { }
  getIngredients(){
    return this.ingredients.slice();
  }
  addNewIngredients(ingredient:Ingredient){
    this.ingredients.push(ingredient);
    this.addIngredients.next(this.ingredients.slice());
  }
  pushIngredients(ingredients:Ingredient[]){
    this.ingredients.push(...ingredients);
    this.addIngredients.next(this.ingredients.slice());
  }
  getAIngredient(id:number){
    return {...this.ingredients[id]};
  }
  upgradeIngrdient(index:number , newImg:Ingredient){
    this.ingredients[index] = newImg;
    this.addIngredients.next(this.ingredients.slice());
  }
  deleteIngredient(index:number){
    this.ingredients.splice(index,1);
    this.addIngredients.next(this.ingredients.slice());
  }
}
