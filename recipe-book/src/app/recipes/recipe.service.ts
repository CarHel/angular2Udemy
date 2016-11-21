import { Injectable } from '@angular/core';
import { Recipe } from './recipe'
import { Ingredient } from '../shared'

@Injectable()
export class RecipeService {
  private recipes: Recipe[] = [
    new Recipe('dummy', 'dummy', 'http://vignette4.wikia.nocookie.net/mrmen/images/5/52/Small.gif/revision/latest?cb=20100731114437', [
      new Ingredient('French Fries',2),
      new Ingredient('Pork Meat',1)
    ]),
    new Recipe('dummy2', 'dummy2', 'http://vignette4.wikia.nocookie.net/mrmen/images/5/52/Small.gif/revision/latest?cb=20100731114437', [])
  ];
  constructor() { }

  getRecipes() {
    return this.recipes;
  }
}
