import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Recipe } from '../../../recipes/recipe.model';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent implements OnInit {
 @Input() recipe: Recipe;
 @Output() selectedItem = new EventEmitter<Recipe>();
  constructor() { }

  ngOnInit(): void {
  }
 onSelected(){
   this.selectedItem.emit(this.recipe);
   console.log(this.recipe);
 }
}
