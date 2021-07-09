import { FormArray } from "@angular/forms";
import { Ingredient } from "../shared/ingredients.model";

export class Recipe {
    public name:string;
    public description:string;
    public imagePath:string;
    public ingredients:Ingredient[];
    constructor(name:string,description:string,imagePath:string,ingredients:Ingredient[]){
       this.name = name;
       this.description = description;
       this.imagePath = imagePath;
       this.ingredients = ingredients;
    }
}

export interface RecipeType {
    name:string;
    description:string;
    imagePath:string;
    ingredients: FormArray | Array<{name:string,amount:number}>
}