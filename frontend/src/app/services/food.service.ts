import { Injectable } from '@angular/core';
import { Food } from '../Shared/models/Food';
import { sample_foods, sample_tags } from 'src/data';
import { tag } from '../Shared/models/tag';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FOODS_BY_SEARCH_URL, FOODS_BY_TAG_URL, FOODS_TAGS_URL, FOODS_URL, FOOD_BY_ID_URL } from '../Shared/constants/urls';

@Injectable({
  providedIn: 'root'
})
export class FoodService {
  constructor(private http:HttpClient) { }
 
  getAll(): Observable<Food[]> {
    return this.http.get<Food[]>(FOODS_URL);
  }

  getAllFoodsBySearchTerm(searchTerm: string) {
    return this.http.get<Food[]>(FOODS_BY_SEARCH_URL + searchTerm);
  }

  getAllTags(): Observable<tag[]> {
    return this.http.get<tag[]>(FOODS_TAGS_URL);
  }

  getAllFoodsByTag(tag: string): Observable<Food[]> {
    return tag === "All" ?
      this.getAll() :
      this.http.get<Food[]>(FOODS_BY_TAG_URL + tag);
  }

  getFoodById(foodId:string):Observable<Food>{
    return this.http.get<Food>(FOOD_BY_ID_URL + foodId);
  }
  // constructor() { }

  // getAll(): Food[]{
  //   return sample_foods
  // }

  // getAllFoodsBySearchTerm(searchTerm: string){
  //   return this.getAll().filter(food => food.name.toLowerCase().includes(searchTerm.toLowerCase()));
  // }

  // getAllTag(): tag[]{
  //   return sample_tags
  // }

  // getAllFoodsByTag(tag: string):Food[]{
  //   return tag ==='All' ?
  //   this.getAll() :
  //    this.getAll().filter(food => food.tags?.includes(tag));
  // }

  // getFoodById(foodId: string){
  //   return this.getAll().find(food => food.id ===foodId) ?? new Food()
  // }
  
}
