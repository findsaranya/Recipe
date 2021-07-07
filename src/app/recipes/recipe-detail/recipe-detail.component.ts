import { Component, Input, OnInit } from '@angular/core';
import { RecipeService } from 'src/app/recipe/recipe.service';
import { ShoppingService } from 'src/app/shopping-list/shopping.service';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {
 @Input() recipe:Recipe;
  constructor(private recipeService:RecipeService) { }

  ngOnInit(): void {
  }
  onAddtoShopping(){
     this.recipeService.addIngredientstoShopping(this.recipe.ingredients);
  }

}
