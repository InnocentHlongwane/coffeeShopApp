import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CoffeeService {
orders=[]
category=[{picname:"capp.jpg",name:"cuppacino",price: 30},
          {picname:"plainCoffee.jpg",name:"plainCoffee",price: 15},
          {picname:"espresso.jpg",name:"Espresso",price: 25},
          {picname:"latte.jpg",name:"Latte",price: 20}]
          
sugar ='';
milk :boolean;
quanityt :number;
price:number
TotalPrice
Name
ProductPrice;
  constructor() { }
getCategory(){
  return this.category
}
getOrders(){
  return this.orders
}
placeOrder(sugar,milk,quantity,price){
this.orders.push({Name:name,Sugar:sugar,Milk:milk,Quanty:quantity,Price:price})
}

calTotalPrice(Quantity){
this.ProductPrice = this.ProductPrice * Quantity;
return this.ProductPrice;
}

getName(name){
  this.Name = name.name;
  this.ProductPrice = name.price;
}

getProductPrice(){
  return this.ProductPrice
}
getCatName(){
  return this.Name;
}
}
