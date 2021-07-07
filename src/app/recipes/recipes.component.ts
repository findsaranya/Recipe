import { Component, OnInit } from '@angular/core';
import { RecipeService } from '../recipe/recipe.service';
import { Recipe } from './recipe.model';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css'],
  providers:[RecipeService]
})
export class RecipesComponent implements OnInit {
  selectedRecipe :Recipe;
  constructor() { }

  ngOnInit(): void {
  }
  selectedItem(selected:Recipe){
    //alert();
    console.log("recipe Selected ",selected);
    this.selectedRecipe = selected;
  }
}
