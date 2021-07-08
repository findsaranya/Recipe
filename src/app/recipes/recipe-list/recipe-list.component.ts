import { Component,OnInit} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RecipeService } from 'src/app/recipe/recipe.service';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
 // @Output() selectedRecipe = new EventEmitter<Recipe>();
  recipes : Recipe [] = [];
  constructor(
    private recipeService:RecipeService,
    private router : Router,
    private route : ActivatedRoute
    ) { }

  ngOnInit(): void {
    this.recipes = this.recipeService.getRecipe();
  }
  onNavigate(){
     this.router.navigate(['new'],{relativeTo:this.route});
  }

}
