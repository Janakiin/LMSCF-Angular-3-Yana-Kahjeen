import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
	items;
	checkoutForm;

  constructor(public cartService: CartService, private formBuilder: FormBuilder) { 
  		this.checkoutForm = this.formBuilder.group ({
  			name: "",
  			adress: "",	
  			email: "",
  			telephone: ""
  		})
  }

  onSubmit(customerData){
  	console.warn("Your order has been submitted", customerData);

  	this.items = this.cartService.clearCart();
  	console.warn(customerData);
  	this.checkoutForm.reset();
  }

  ngOnInit(): void {
  	this.items = this.cartService.items;
  }

}
