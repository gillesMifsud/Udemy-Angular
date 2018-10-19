import { EventEmitter } from '@angular/core';
import { Recipe } from './recipe.model';

export class RecipeService {

  recipeSelected = new EventEmitter<Recipe>();

  private recipes: Recipe[] = [
    new Recipe('The name', 'Stir fried', 'https://www.seriouseats.com/recipes/images/2017/03/Stir_Fried_Lo_Mein_20170315_3-edit-1500x1125.jpg'),
    new Recipe('The name 2', 'Nachos', 'https://www.seriouseats.com/recipes/images/2017/06/20170627-summer-nachos-matt-clifton-1-1500x1125.jpg'),
    new Recipe('The name 3', 'Lamb shank', 'http://cdnwp.audiencemedia.com/wp-content/uploads/2015/04/513716-1-eng-GB_lamb-shank-recipes.jpg'),
  ];

  constructor() { }

  getRecipes() {
    return this.recipes.slice(); // slice make get justa copy, not the actual reference
  }

}
