import { Component, OnInit } from '@angular/core';
import { CoffeeService } from '../coffee.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-order',
  templateUrl: './order.page.html',
  styleUrls: ['./order.page.scss'],
})
export class OrderPage implements OnInit {
orderArr = [];
OrderID

  constructor(public coffee:CoffeeService, public route:ActivatedRoute){
    this.orderArr=this.coffee.getOrders()
   }

  ngOnInit() {
    this.route.paramMap.subscribe(params=>{
     this.OrderID=params.get(' ')
     this.orderArr =this.coffee.getOrders()
     console.log(this.orderArr)
    }
    )}
    getOrders(){

    }
  
}
