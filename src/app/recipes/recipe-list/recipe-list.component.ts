import { Component,OnDestroy,OnInit} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { RecipeService } from 'src/app/recipe/recipe.service';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit,OnDestroy {
 // @Output() selectedRecipe = new EventEmitter<Recipe>();
  recipes : Recipe [] = [];
  recipeSubscription :Subscription
  constructor(
    private recipeService:RecipeService,
    private router : Router,
    private route : ActivatedRoute
    ) { }

  ngOnInit(): void {
    this.recipes = this.recipeService.getRecipe();
   this.recipeSubscription =  this.recipeService.recipeChanged.subscribe((recipeList:Recipe[]) => {
       this.recipes = recipeList;
    })
  }
  onNavigate(){
     this.router.navigate(['new'],{relativeTo:this.route});
  }
  ngOnDestroy(){
     this.recipeSubscription.unsubscribe();
  }

}
