import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Recipe } from '../recipes/recipe.model';
import { Ingredient } from '../shared/ingredients.model';
import { ShoppingService } from '../shopping-list/shopping.service';
@Injectable({
  providedIn: 'root'
})
export class RecipeService {
  recipeChanged = new Subject<Recipe[]>();
  selectedRecipe = new Subject<Recipe>();
  private recipes : Recipe [] = [
    new Recipe('sample Recipe',
    'Test Recipe',
    'https://image.freepik.com/free-photo/dietary-menu-healthy-vegan-salad-vegetables-broccoli-mushrooms-spinach-quinoa-bowl-flat-lay-top-view_2829-20115.jpg',
    [ new Ingredient('mushroom',5),
    new Ingredient('onion',10)],
    ),
    new Recipe('Pumpkin Salad',
    'Salad Recipe',
    'https://i1.wp.com/www.eatthis.com/wp-content/uploads/2019/10/pumpkin-pad-thai-recipe.jpg?resize=800%2C450&ssl=1',
    [
      new Ingredient('pumpkin seeds',10),
    new Ingredient('carrot',10)
  ]
    
    )
    
  ];
  constructor(private shopping:ShoppingService) { }
  getRecipe (){
    return this.recipes.slice();
  }
  addIngredientstoShopping(ingredients:Ingredient[]){
    //console.log(ingredients);
    this.shopping.pushIngredients(ingredients);
}
getARecipe(id:number){
  return this.recipes.slice()[id];//give a copy

}
addRecipe(recipe:Recipe){
  this.recipes.push(recipe);
  this.recipeChanged.next(this.recipes.slice());
}
updateRecipe(id:number,newRecipe:Recipe){
  this.recipes[id] = newRecipe;
  this.recipeChanged.next(this.recipes.slice());
}
deleteRecipe(id:number){
  this.recipes.splice(id,1);
  this.recipeChanged.next(this.recipes.slice());
}
}
