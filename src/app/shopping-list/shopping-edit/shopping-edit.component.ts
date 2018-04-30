import {Component, ElementRef, EventEmitter, OnInit, Output, ViewChild} from '@angular/core';
import {Ingredient} from '../../shared/ingredients.model';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.scss']
})
export class ShoppingEditComponent implements OnInit {
  @ViewChild('nameInput') nameInputRef: ElementRef;
  @ViewChild('amountInput') amountInputRef: ElementRef;
  @Output() newIngredient = new EventEmitter<Ingredient>();
  constructor() { }

  ngOnInit() {
  }

  addIngredient(nameInput, amountInput) {
    this.newIngredient.emit(new Ingredient(nameInput, amountInput));
  }

}
