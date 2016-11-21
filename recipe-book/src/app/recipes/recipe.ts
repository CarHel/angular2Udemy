import {Ingredient} from "../shared";
export class Recipe {
    constructor(public name: string, public description: string, public imagePath, public ingredients: Ingredient[])
    {

    }
}
