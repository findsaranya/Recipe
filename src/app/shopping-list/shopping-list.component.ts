import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Ingredient } from '../shared/ingredients.model';
import { ShoppingService } from './shopping.service';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css'],
  //providers:[ShoppingService]
})
export class ShoppingListComponent implements OnInit,OnDestroy {
  ingredients :Ingredient[]=[];
  paramSubscription :Subscription;
  constructor(private shoppingService:ShoppingService) { }

  ngOnInit(): void {
    this.ingredients = this.shoppingService.getIngredients();
    this.paramSubscription = this.shoppingService.addIngredients.subscribe((ing:Ingredient[]) =>{
      this.ingredients = ing;
    })
    
  }
  onEdit(id:number){
    this.shoppingService.editinglist.next(id);
  }
  ngOnDestroy(){
    this.paramSubscription.unsubscribe();
  }

}