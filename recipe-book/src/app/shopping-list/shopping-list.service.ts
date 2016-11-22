import { Injectable } from '@angular/core';
import { Ingredient } from '../shared'

@Injectable()
export class ShoppingListService {
  private items: Ingredient[] = [];
  constructor() { }

  getItems() {
    return this.items;
  }

  addItems(items: Ingredient[]) {
    this.items.push(...items);
    // Array.prototype.push.apply(this.items,items);
  }
}
