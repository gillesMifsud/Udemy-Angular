import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import {RecipesComponent} from './recipes/recipes.component';
import {RecipeDetailComponent} from './recipes/recipe-detail/recipe-detail.component';

const appRoutes: Routes = [
    { path: '', redirectTo: '/recipes', pathMatch: 'full' }, // Redirect only if the full path is empty
    { path: 'recipes', component: RecipesComponent, children: [
            {path: ':id/:name', component: RecipeDetailComponent}
        ]
    },
    { path: 'shopping-list', component: ShoppingListComponent },
    // { path: 'users', component: UsersComponent, children: [
    //         { path: ':id/:name', component: UserComponent }
    //     ] },
    // {
    //     path: 'servers',
    //     canActivateChild: [AuthGuard],
    //     component: ServersComponent,
    //     children: [
    //         { path: ':id', component: ServerComponent, resolve: {server: ServerResolver} },
    //         { path: ':id/edit', component: EditServerComponent, canDeactivate: [CanDeactivateGuard] }
    //     ] },
    // { path: 'not-found', component: ErrorPageComponent, data: {message: 'Page not found!'} },
    // { path: '**', redirectTo: '/not-found' }
];

@NgModule({
    imports: [
        RouterModule.forRoot(appRoutes)
    ],
    exports: [RouterModule]
})
export class AppRoutingModule {

}
