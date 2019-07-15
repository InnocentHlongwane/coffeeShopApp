import { Component, OnInit } from '@angular/core';
import { CoffeeService } from '../coffee.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-place-order',
  templateUrl: './place-order.page.html',
  styleUrls: ['./place-order.page.scss'],
})
export class PlaceOrderPage implements OnInit {
placeOrderArr
Name;
sugar
quantity
milk
product_price;
  constructor(public coffee:CoffeeService, public route :ActivatedRoute) { 
    this.placeOrderArr=this.coffee.getOrders()
    this.Name = this.coffee.getCatName();
    this.product_price = this.coffee.getProductPrice();
    
  }
  
  ngOnInit() {

  }

  getSugar(event){
    this.sugar = event.detail.value;
    console.log(this.sugar);
    
  }

  getQuantity(event){
    this.product_price = this.coffee.getProductPrice()
    this.quantity =event.detail.value;
    console.log(this.quantity);
    this.product_price = this.product_price * this.quantity
  
  }

  getMilk(event){
    this.milk =event.detail.value;
    console.log(this.milk);
    
  }

  PlaceOrder(){
    this.coffee.placeOrder(this.sugar,this.milk,this.quantity,this.product_price)
  }


}
