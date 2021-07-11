import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Params, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { RecipeService } from 'src/app/recipe/recipe.service';
import { ShoppingService } from 'src/app/shopping-list/shopping.service';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {
 recipe:Recipe;
 paramSubscribe : Subscription;
 id:number;
  constructor(
    private recipeService:RecipeService,
    private route:ActivatedRoute,
    private router:Router
    ) { }

  ngOnInit(): void {
    //let id = this.route.snapshot.params['id'];
    this.route.params
    .subscribe((params:Params) => {
      this.id = +params['id'];
      this.recipe = this.recipeService.getARecipe(this.id);
    })

  }
  onAddtoShopping(){
     this.recipeService.addIngredientstoShopping(this.recipe.ingredients);
  }
 onEditRecipe(){
   this.router.navigate(['edit'],{relativeTo:this.route})
 }
 onDeleteRecipe(){
   this.recipeService.deleteRecipe(this.id);
   this.router.navigate(["/recipes"]);
 }

}
