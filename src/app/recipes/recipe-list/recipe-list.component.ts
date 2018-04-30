import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Recipe} from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.scss']
})
export class RecipeListComponent implements OnInit {

  @Output() recipeWasSelected = new EventEmitter<Recipe>();

  recipes: Recipe[] = [
    new Recipe('The name', 'The description', 'https://www.seriouseats.com/recipes/images/2017/03/Stir_Fried_Lo_Mein_20170315_3-edit-1500x1125.jpg'),
    new Recipe('The name 2', 'The description 2', 'https://www.seriouseats.com/recipes/images/2017/03/Stir_Fried_Lo_Mein_20170315_3-edit-1500x1125.jpg'),
    new Recipe('The name 3', 'The description 3', 'https://www.seriouseats.com/recipes/images/2017/03/Stir_Fried_Lo_Mein_20170315_3-edit-1500x1125.jpg'),
  ];

  constructor() {
  }

  ngOnInit() {
  }

  onRecipeElSelected(recipe: Recipe) {
    this.recipeWasSelected.emit(recipe);
    console.log(recipe);
  }

}
