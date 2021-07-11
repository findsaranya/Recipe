import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormArray } from '@angular/forms';
import { ActivatedRoute, Params } from '@angular/router';
import { RecipeService } from 'src/app/recipe/recipe.service';
import { Recipe, RecipeType } from '../recipe.model';
@Component({
  selector: 'app-recipe-edit',
  templateUrl: './recipe-edit.component.html',
  styleUrls: ['./recipe-edit.component.css']
})
export class RecipeEditComponent implements OnInit {
  id:number;
  editMode:boolean = false;
  recipeDetails : RecipeType = {
    name:'',
    description:'',
    imagePath:'',
    ingredients:new FormArray([]) 
  }
  recipeForm:FormGroup
  constructor(
    private route:ActivatedRoute,
    private recipeService : RecipeService
    ) { }

  ngOnInit(): void {
    console.log(this.route)
    this.route.params
    .subscribe((params:Params) => {
        this.id = params['id'];
        this.editMode = params['id'] != null;
        this.initForm();
        console.log("controls",this.controls);
        console.log(this.editMode);

    });
  }
  onSubmit(){
    console.log(this.recipeForm);
  }
  // private initForm(){
    
  //   if(this.editMode){
  //   let details = this.recipeService.getARecipe(this.id);
  //   var formControls = [];
  //     if(details['ingredients']){
       
  //       for (let ing of details.ingredients){
  //         formControls.push(
  //           new FormGroup({
  //             'name':new FormControl(ing.name),
  //             'amount':new FormControl(ing.amount)
  //           })
  //         )

  //       }
  //       this.recipeDetails = details;
  //       this.recipeDetails.ingredients = formControls;
  //     }
  //   }
  //       this.recipeForm = new FormGroup({
  //         'name': new FormControl (this.recipeDetails.name,[Validators.required]),
  //         'description': new FormControl (this.recipeDetails.description,[Validators.required]),
  //         'imagePath' : new FormControl(this.recipeDetails.imagePath,[Validators.required]),
  //         'ingredients' : 
  //       })
  // }


  private initForm() {
    let recipeName = '';
    let recipeImagePath = '';
    let recipeDescription = '';
    let recipeIngredients = new FormArray([]);

    if (this.editMode) {
      const recipe = this.recipeService.getARecipe(this.id);
      recipeName = recipe.name;
      recipeImagePath = recipe.imagePath;
      recipeDescription = recipe.description;
      if (recipe['ingredients']) {
        for (let ingredient of recipe.ingredients) {
          recipeIngredients.push(
            new FormGroup({
              'name': new FormControl(ingredient.name, Validators.required),
              'amount': new FormControl(ingredient.amount, [
                Validators.required,
                Validators.pattern(/^[1-9]+[0-9]*$/)
              ])
            })
          );
        }
      }
    }

    this.recipeForm = new FormGroup({
      'name': new FormControl(recipeName, Validators.required),
      'imagePath': new FormControl(recipeImagePath, Validators.required),
      'description': new FormControl(recipeDescription, Validators.required),
      'ingredients': recipeIngredients
    });
  }
  get controls() { // a getter!
    return (<FormArray>this.recipeForm.get('ingredients')).controls;
  }

}
