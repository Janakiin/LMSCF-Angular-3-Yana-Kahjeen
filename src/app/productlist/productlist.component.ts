import { Component, OnInit } from '@angular/core';
import{ productlist } from 'src/products';
import { CartService } from '../cart.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-productlist',
  templateUrl: './productlist.component.html',
  styleUrls: ['./productlist.component.css']
})
export class ProductlistComponent implements OnInit {
	productlist : any = productlist;
	product;

	  

  constructor(public route: ActivatedRoute, public cartService: CartService) { }

   addToCart(product) {
  	
  	window.alert("Your product is added to the cart!");
  	this.cartService.addToCart(product);

  	}

  ngOnInit() {
  
	}
 

}
