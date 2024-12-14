// RecipeModel.ts
export interface RecipeModel {
  dishName: string;
  ingredients: string[];
  instructions: string[];
  preparationTime: string;
  cookingTime: string;
  servingSize: string;
  imageUrl: string;
  category: string;
}