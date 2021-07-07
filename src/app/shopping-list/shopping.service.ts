import { Injectable } from '@angular/core';
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
  constructor() { }
  getIngredients(){
    return this.ingredients.slice();
  }
}
