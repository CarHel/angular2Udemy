import { RecipeService } from './recipes/recipe.service';
import { Component, OnInit } from '@angular/core';
import { DropdownDirective } from "./dropdown.directive";

@Component({
  selector: 'rb-header',
  templateUrl: './header.component.html'
})
export class HeaderComponent {

  constructor(private recipeService: RecipeService) { }

  onStore() {
    this.recipeService.storeData().subscribe(t => console.log(t));
  }

  onFetch() {
    this.recipeService.fetchData();
  }
}
