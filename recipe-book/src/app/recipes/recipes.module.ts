import { SharedModule } from './../shared/shared.module';
import { recipesRouting } from './recipes.routing';
import { ReactiveFormsModule } from '@angular/forms';
import { RecipeStartComponent } from './recipe-start.component';
import { RecipeDetailComponent } from './recipe-detail/recipe-detail.component';
import { RecipeEditComponent } from './recipe-edit/recipe-edit.component';
import { RecipeItemComponent } from './recipe-list/recipe-item.component';
import { RecipeListComponent } from './recipe-list/recipe-list.component';
import { NgModule } from '@angular/core';
import { RecipesComponent } from './recipes.component';

@NgModule({
  imports: [
    SharedModule,
    ReactiveFormsModule  ,
    recipesRouting
  ],
  declarations: [RecipesComponent,
    RecipeListComponent,
    RecipeItemComponent,
    RecipeDetailComponent,
    RecipeEditComponent,
    RecipeStartComponent]
})
export class RecipesModule { }
