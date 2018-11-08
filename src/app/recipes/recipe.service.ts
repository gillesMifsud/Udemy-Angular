import { Injectable} from '@angular/core';
import { Recipe } from './recipe.model';
import { Ingredient } from '../shared/ingredients.model';
import {ShoppingListService} from '../shopping-list/shopping-list.service';

@Injectable()
export class RecipeService {
  private recipes: Recipe[] = [
    new Recipe(
      'The name',
      'Stir fried',
      'https://picsum.photos/200/300/?random',
      [
        new Ingredient('eggs' , 3),
        new Ingredient('tuna' , 4),
      ]),
      new Recipe(
        'The name 2',
        'Stir fried 2',
        'https://picsum.photos/200/300/?random',
        [
          new Ingredient('tomatoes' , 3),
          new Ingredient('apples' , 4),
        ]),
  ];

  constructor(private shoppingListService: ShoppingListService) { }

  getRecipes() {
    return this.recipes.slice(); // slice make get just a copy, not the actual reference
  }

  getRecipeById(index:number) {
    return this.recipes[index];
  }

  addIngredientToShoppingList(ingredients: Ingredient[]) {
    this.shoppingListService.addIngredients(ingredients);
  }
}
