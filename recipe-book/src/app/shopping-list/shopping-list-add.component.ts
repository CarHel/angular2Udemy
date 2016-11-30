import { ShoppingListService } from './shopping-list.service';
import { Ingredient } from './../shared/ingredient';
import { Component, OnChanges, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'rb-shopping-list-add',
  templateUrl: './shopping-list-add.component.html'
})
export class ShoppingListAddComponent implements OnChanges {
  @Input() item: Ingredient;
  @Output() cleared = new EventEmitter();

  isAdd = true;

  constructor(private sls: ShoppingListService) {

  }

  ngOnChanges(changes: any) {
console.log(changes);
    if (changes.item.currentValue === null) {
      this.isAdd = true;
      this.item = { name: null, amount: null };
    }
    else
      this.isAdd = false;
  }

  onDelete(ingredient: Ingredient) {
    this.sls.deleteItem(ingredient);
    this.onClear();
  }

  onSubmit(ingredient: Ingredient) {
    if (!this.isAdd) {
      this.sls.editItem(this.item, ingredient);
      this.onClear();
    }
    else {
      this.item = ingredient;
      this.sls.addItem(this.item);
    }
  }

  onClear() {
    this.isAdd = true;
    this.cleared.emit(null);
  }

}
