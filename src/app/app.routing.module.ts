import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import {ShoppingListComponent} from './shopping-list/shopping-list.component';
import {RecipesComponent} from './recipes/recipes.component';
import {RecipeDetailComponent} from './recipes/recipe-detail/recipe-detail.component';
import {RecipeStartComponent} from './recipes/recipe-start/recipe-start.component';
import {RecipeEditComponent} from './recipes/recipe-edit/recipe-edit.component';
import {SignupComponent} from './auth/signup/signup.component';
import {SigninComponent} from './auth/signin/signin.component';
import {AuthGuard} from './auth/auth-guard.service';

const appRoutes: Routes = [
    {path: '', redirectTo: '/recipes', pathMatch: 'full'}, // Redirect only if the full path is empty
    {path: 'shopping-list', component: ShoppingListComponent},
    {path: 'register', component: SignupComponent},
    {path: 'login', component: SigninComponent},
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
