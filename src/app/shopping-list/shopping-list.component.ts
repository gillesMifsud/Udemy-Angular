import {Component, OnInit, OnDestroy} from '@angular/core';
import {Ingredient} from '../shared/ingredients.model';
import {ShoppingListService} from './shopping-list.service';
import {Subscription} from 'rxjs/Subscription';

@Component({
    selector: 'app-shopping-list',
    templateUrl: './shopping-list.component.html',
    styleUrls: ['./shopping-list.component.scss']
})
export class ShoppingListComponent implements OnInit {
    ingredients: Ingredient[];
    private subscription: Subscription;

    constructor(private shoppingListService: ShoppingListService) {
    }

    ngOnInit() {
        this.ingredients = this.shoppingListService.getIngredients();
        this.subscription = this.shoppingListService.ingredientsChanged.subscribe(
            (ingredients: Ingredient[]) => {
                this.ingredients = ingredients;
            }
        );
    }

    onEditItem(index: number) {
        this.shoppingListService.startedEditing.next(index);
    }

    ngOnDestroy() {
        this.subscription.unsubscribe();
    }
}
