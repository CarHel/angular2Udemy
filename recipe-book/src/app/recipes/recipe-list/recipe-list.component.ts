import { Component, OnInit, EventEmitter,Output } from '@angular/core';

import {Recipe} from '../recipe';


@Component({
  selector: 'rb-recipe-list',
  templateUrl: './recipe-list.component.html'
})
export class RecipeListComponent implements OnInit {
recipes: Recipe[]= [
 new Recipe('dummy', 'dummy', 'http://vignette4.wikia.nocookie.net/mrmen/images/5/52/Small.gif/revision/latest?cb=20100731114437',[]),
  new Recipe('dummy2', 'dummy2', 'http://vignette4.wikia.nocookie.net/mrmen/images/5/52/Small.gif/revision/latest?cb=20100731114437',[])
];
@Output() recipeSelected=new EventEmitter<Recipe>();

  constructor() { }

  ngOnInit() {
  }

onSelected(recipe: Recipe)
{
this.recipeSelected.emit(recipe);
}
}
