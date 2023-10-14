import { Injectable } from '@angular/core';
import { Foods } from 'src/app/shared/models/food';
import { Tag } from 'src/app/shared/models/tag';
@Injectable({
  providedIn: 'root'
})
export class FoodService {

  constructor() { }

  getFoodById(id:number): Foods{
    return this.getAll().find(food => food.id == id)!;
  }

  getAllFoodByTag(tag:string) :Foods[]{
     return tag =="All"? 
     this.getAll() : this.getAll().filter(food => food.tags?.includes(tag));
  //you can write this statment is very simple type lets do it.
  }

  getAllTag():Tag[]{
   return[
    { name: 'All', count: 8},
    { name: 'FastFood', count: 6},
    { name: 'Pizza', count: 4},
    { name: 'Lunch', count: 5},
    { name: 'SlowFood', count: 2},
    { name: 'Hamburger', count: 1},
    { name: 'Fry', count: 1},
    { name: 'Soup', count: 1},
   ];
  }
  getAll():Foods[]{
    return [
      {
        id: 1,
        name: 'Pizza Pepperoni',
        cookTime: '10-20',
        price: 60,
        favorite: false,
        origins: ['Italy'],
        star: 4.5,
        imageUrl: '/assets/food-1.jpg',
        tags: ['FastFood', 'Pizza', 'Lunch'],
      },
      {
        id: 2,
        name: 'Meatball',
        cookTime: '10-20',
        price: 30,
        favorite: true,
        origins: ['Persia', 'Middle east', 'China'],
        star: 4.7,
        imageUrl: '/assets/food-2.jpg',
        tags: ['SlowFood', 'Lunch'],
      },
      {
        id: 3,
        name: 'Hamburger',
        cookTime: '10-15',
        price: 50,
        favorite: false,
        origins: ['Germany', 'US'],
        star: 3.5,
        imageUrl: '/assets/food-3.jpg',
        tags: ['FastFood', 'Hamburger'],
      },
      {
        id: 4,
        name: 'Fried Potatoes',
        cookTime: '15-20',
        price: 30,
        favorite: true,
        origins: ['Belgium', 'France', 'Indian'],
        star: 3.3,
        imageUrl: '/assets/food-4.jpg',
        tags: ['FastFood', 'Fry'],
      },
      {
        id: 5,
        name: 'Masala Paneer',
        cookTime: '40-50',
        price: 90,
        favorite: false,
        origins: ['Indian', 'Asia'],
        star: 3.0,
        imageUrl: '/assets/food-5.jpg',
        tags: ['SlowFood', 'Soup'],
      },
      {
        id: 6,
        name: 'Vegetable Pizza',
        cookTime: '40-50',
        price: 55,
        favorite: false,
        origins: ['Italy'],
        star: 4.0,
        imageUrl: '/assets/food-6.jpg',
        tags: ['FastFood', 'Pizza', 'Lunch'],
      },
      {
        id: 7,
        name: 'Delicious Sandwich',
        cookTime: '20-30',
        price: 40,
        favorite: false,
        origins: ['Indian'],
        star: 4.0,
        imageUrl: '/assets/food-7.jpg',
        tags: ['FastFood', 'Pizza', 'Lunch'],
      },
      {
        id: 8,
        name: 'Vegetables Burger Bada',
        cookTime: '10-15',
        price: 20,
        favorite: true,
        origins: ['Indian'],
        star: 4.0,
        imageUrl: '/assets/food-8.jpg',
        tags: ['FastFood', 'Pizza', 'Lunch'],
      }
    ];
  }
}
