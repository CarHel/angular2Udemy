import { RecipeService } from './../recipe.service';
import { Subscription } from 'rxjs/Rx';
import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Recipe } from '../recipe';
import { ShoppingListService } from '../../shopping-list'

@Component({
  selector: 'rb-recipe-detail',
  templateUrl: './recipe-detail.component.html'
})
export class RecipeDetailComponent implements OnInit, OnDestroy {
  private selectedRecipe: Recipe;
  private subscription: Subscription;
  private recipeIndex: number;

  constructor(private shoppingListService: ShoppingListService,
    private route: ActivatedRoute,
    private recipeService: RecipeService,
    private router: Router) { }

  onAddToShoppingList() {
    if (this.selectedRecipe)
      this.shoppingListService.addItems(this.selectedRecipe.ingredients);
  }

  onEdit() {
    this.router.navigate(['/recipes', this.recipeIndex, 'edit']);
  }

  onDelete() {
    this.recipeService.deleteRecipe(this.selectedRecipe);
    this.router.navigate(['/recipes']);
  }

  ngOnInit() {
    this.subscription = this.route.params.subscribe(t => {
      this.recipeIndex = t['id'];
      this.selectedRecipe = this.recipeService.getRecipe(this.recipeIndex);
    });
  }
  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
