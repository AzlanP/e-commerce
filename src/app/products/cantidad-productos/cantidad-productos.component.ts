import { CarritoService } from './../../servicios/carrito.service';
import { Component, OnInit, Input } from '@angular/core';
import { ShoppingCart } from 'src/app/model/shopping-cart';
import { Producto } from 'src/app/model/producto';

@Component({
  selector: 'cantidad-productos',
  templateUrl: './cantidad-productos.component.html',
  styleUrls: ['./cantidad-productos.component.css']
})
export class CantidadProductosComponent {

  @Input('product') product: Producto;
  @Input('shopping-cart') shoppingCart: ShoppingCart;

  constructor(private cartService: CarritoService) { }

  addToCart() {
    this.cartService.addToCart(this.product);
  }

  removeFromCart() {
    this.cartService.removeFromCart(this.product);
  }

  getQuantity() {
    if (!this.shoppingCart) { return 0; }

    const item = this.shoppingCart.itemsMap[this.product.key];
    return item ? item.quantity : 0;
  }
}
