import { HomeComponent } from './home.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { RecipesComponent } from './recipes/recipes.component';
import { Routes, RouterModule } from '@angular/router';

const APP_ROUTES:Routes=[
    {path:'',component:HomeComponent},
    {path:'recipes',loadChildren:'app/recipes/recipes.module#RecipesModule'},
    {path:'shopping-list',component:ShoppingListComponent},
];

export const routing=RouterModule.forRoot(APP_ROUTES);