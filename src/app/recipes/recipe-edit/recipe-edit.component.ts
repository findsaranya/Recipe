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
        console.log(this.editMode);

    });
  }
  onSubmit(){
    console.log(this.recipeForm);
  }
  private initForm(){
    
    if(this.editMode){
    let details = this.recipeService.getARecipe(this.id);
    let formControls = [];
      if(details['ingredients']){
       
        for (let ing of details.ingredients){
          formControls.push(
            new FormGroup({
              'name':new FormControl(ing.name),
              'amount':new FormControl(ing.amount)
            })
          )

        }
        this.recipeDetails = details;
      }
    }
        this.recipeForm = new FormGroup({
          'name': new FormControl (this.recipeDetails.name,[Validators.required]),
          'description': new FormControl (this.recipeDetails.description,[Validators.required]),
          'imagePath' : new FormControl(this.recipeDetails.imagePath,[Validators.required]),
          'ingrdeients':this.recipeDetails.ingredients
        })
  }

}
