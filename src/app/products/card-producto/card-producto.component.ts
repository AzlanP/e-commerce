import { Producto } from './../../model/producto';
import { Component, OnInit, Input } from '@angular/core';

import { CarritoService } from 'src/app/servicios/carrito.service';
import { ShoppingCart } from 'src/app/model/shopping-cart';

@Component({
  selector: 'card-producto',
  templateUrl: './card-producto.component.html',
  styleUrls: ['./card-producto.component.css']
})
export class CardProductoComponent {
  @Input('product') product: Producto;
  @Input('show-actions') showActions = true;
  @Input('shopping-cart') shoppingCart: ShoppingCart;

  constructor(private cartService: CarritoService) { }

  addToCart() {
    // console.log(this.product);
    this.cartService.addToCart(this.product);
  }

  // removeFromCart() {
  //   this.cartService.removeFromCart(this.product);
  // }

  getQuantity() {
    if (!this.shoppingCart) { return 0; }
    // console.log(this.shoppingCart);
    const item = this.shoppingCart.itemsMap[this.product.key];
    return item ? item.quantity : 0;
  }


}
