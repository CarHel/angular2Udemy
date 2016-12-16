import { SharedModule } from './../shared/shared.module';
import { FormsModule } from '@angular/forms';
import { ShoppingListAddComponent } from './shopping-list-add.component';
import { ShoppingListComponent } from './shopping-list.component';
import { NgModule } from '@angular/core';

@NgModule({
  imports: [
    SharedModule,
    FormsModule,
  ],
  declarations: [
    ShoppingListComponent,
    ShoppingListAddComponent
  ]
})
export class ShoppingListModule { }
