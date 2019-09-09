import { Producto } from './../model/producto';
import { Component, OnInit } from '@angular/core';
import { CarritoService } from '../servicios/carrito.service';
import { ShoppingCart } from '../model/shopping-cart';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css']
})
export class ShoppingCartComponent implements OnInit {

  cart: ShoppingCart = new ShoppingCart(null);
  shoppingCartItemCount: number;
  // producto: Product;
  shoppingCart: ShoppingCart;
  
  constructor(private shoppingCartService: CarritoService) { }

  addToCart(producto: Producto) {
    this.shoppingCartService.addToCart(producto);
  }

  removeFromCart(producto: Producto) {
    this.shoppingCartService.removeFromCart(producto);
  }

  getQuantity(producto: Producto) {
    if (!this.cart) { return 0; }

    const item = this.cart.itemsMap[producto.key];
    // console.log(this.cart.items);
    return item ? item.quantity : 0;
  }

  clearCart() {
    this.shoppingCartService.clearCart();
  }
  
  async ngOnInit() {
    const cart$ = await this.shoppingCartService.getCart();
    cart$.subscribe( temp => {
      // tslint:disable-next-line:prefer-const
      let data: any;    
      data = temp.payload.child('/items').val();
      // data = temp.payload.val();
      this.cart = new ShoppingCart(data);
      this.shoppingCartItemCount = this.cart.totalItemsCount;
      // console.log('data', data);
      
    });
  }


}
