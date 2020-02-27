import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import{ productlist } from 'src/products';
import { CartService} from '../cart.service';



@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
	product;
	
  constructor(public route: ActivatedRoute, public cartService: CartService) { }

  addToCart(product) {

  	window.alert("Your product is added to the cart!");
  	this.cartService.addToCart(product);

  }

  ngOnInit(): void {
  	this.route.paramMap.subscribe(params => {
  	this.product = productlist[+params.get('productId')];	
  	});
  }

}
