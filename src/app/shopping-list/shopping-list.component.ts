import {Component, Input, OnInit} from '@angular/core';
import {Ingredient} from '../shared/ingredients.model';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.scss']
})
export class ShoppingListComponent implements OnInit {

  ingredients: Ingredient[] = [
      new Ingredient('Patates', 3),
      new Ingredient('Tomates', 8),
      new Ingredient('Pates', 7),
      new Ingredient('Riz', 13)
  ];

  constructor() { }

  ngOnInit() {
  }

  onIngredientAdded(ingredient: Ingredient) {
    this.ingredients.push(ingredient);
  }

}
