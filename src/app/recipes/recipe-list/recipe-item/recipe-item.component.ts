import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { RecipeService } from 'src/app/recipe/recipe.service';
import { Recipe } from '../../../recipes/recipe.model';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent implements OnInit {
 @Input() recipe: Recipe;
 @Input() id:number;
 //@Output() selectedItem = new EventEmitter<Recipe>();
 //@Output() selectedItem = new EventEmitter<void>();
  constructor(private recipeService:RecipeService) { }

  ngOnInit(): void {
  }
 onSelected(){
   //this.selectedItem.emit();
   //console.log(this.recipe);
   this.recipeService.selectedRecipe.emit(this.recipe)
 }
}
