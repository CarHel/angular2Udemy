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
    addItem(item: Ingredient) {
    this.items.push(item);
    // Array.prototype.push.apply(this.items,items);
  }

  editItem(oldItem:Ingredient,newItem:Ingredient){
    this.items[this.items.indexOf(oldItem)]=newItem;
  }

  deleteItem(item:Ingredient)
  {
    this.items.splice(this.items.indexOf(item),1);
  }
}
