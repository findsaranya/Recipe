import { EventEmitter, Injectable } from '@angular/core';
import { Recipe } from '../recipes/recipe.model';
@Injectable({
  providedIn: 'root'
})
export class RecipeService {
  selectedRecipe = new EventEmitter<Recipe>();
  recipes : Recipe [] = [
    new Recipe('sample Recipe',
    'Test Recipe',
    'https://image.freepik.com/free-photo/dietary-menu-healthy-vegan-salad-vegetables-broccoli-mushrooms-spinach-quinoa-bowl-flat-lay-top-view_2829-20115.jpg'
    ),
    new Recipe('Pumpkin Salad',
    'Salad Recipe',
    'https://i1.wp.com/www.eatthis.com/wp-content/uploads/2019/10/pumpkin-pad-thai-recipe.jpg?resize=800%2C450&ssl=1'
    )
    
  ];
  constructor() { }
  getRecipe (){
    return this.recipes.slice();
  }
}
