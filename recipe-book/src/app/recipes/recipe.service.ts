import { Observable } from 'rxjs/Rx';
import { RecipesComponent } from './recipes.component';
import { Headers, Http } from '@angular/http';
import { Injectable, EventEmitter } from '@angular/core';
import { Recipe } from './recipe';
import { Ingredient } from '../shared';
import 'rxjs/Rx';


@Injectable()
export class RecipeService {
  recipesChanged = new EventEmitter<Recipe[]>();

  private recipes: Recipe[] = [
    new Recipe('dummy', 'dummy', 'http://vignette4.wikia.nocookie.net/mrmen/images/5/52/Small.gif/revision/latest?cb=20100731114437', [
      new Ingredient('French Fries', 2),
      new Ingredient('Pork Meat', 1)
    ]),
    new Recipe('dummy2', 'dummy2', 'http://vignette4.wikia.nocookie.net/mrmen/images/5/52/Small.gif/revision/latest?cb=20100731114437', [])
  ];
  constructor(private http: Http) { }

  getRecipes() {
    return this.recipes;
  }
  getRecipe(id: number) {
    return this.recipes[id];
  }
  deleteRecipe(recipe: Recipe) {
    this.recipes.splice(this.recipes.indexOf(recipe), 1);
  }
  addRecipe(recipe: Recipe) {
    this.recipes.push(recipe);
  }
  editRecipe(oldRecipe: Recipe, newRecipe: Recipe) {
    this.recipes[this.recipes.indexOf(oldRecipe)] = newRecipe;
  }

  storeData() {
    const body = JSON.stringify(this.recipes);
    const headers = new Headers({
      'Content-Type': 'application/json'
    });
    return this.http.put('https://recipe-book-1b51c.firebaseio.com/recipes.json', body, { headers: headers });
  }

  fetchData() {
    return this.http.get('https://recipe-book-1b51c.firebaseio.com/recipes.json').map(t => t.json()).subscribe(t => {
      this.recipes = t;
      this.recipesChanged.emit(this.recipes);
    });

  }
}
