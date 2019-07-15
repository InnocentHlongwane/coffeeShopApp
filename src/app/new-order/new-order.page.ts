import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CoffeeService } from '../coffee.service';

@Component({
  selector: 'app-new-order',
  templateUrl: './new-order.page.html',
  styleUrls: ['./new-order.page.scss'],
})
export class NewOrderPage implements OnInit {
newORderArr
categories
  constructor(public coffee: CoffeeService, public  route :ActivatedRoute) { 
    this.categories=this.coffee.getCategory()
  }
  
  ngOnInit() {
    
  }

  get_Name(name){
    this.coffee.getName(name);
  }
}
