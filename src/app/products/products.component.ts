import { CarritoService } from './../servicios/carrito.service';
import { Producto } from 'src/app/model/producto';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { Subscription, Observable } from 'rxjs';
import { ShoppingCart } from '../model/shopping-cart';
import { ProductoService } from '../servicios/producto.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent  implements OnInit, OnDestroy {
 
  products: Producto[] = [];
  filteredProducts: Producto[];
  cart: ShoppingCart;
  category: string;
  subscription: Subscription;

  constructor(
    private route: ActivatedRoute,
    private productService: ProductoService,
    private shoppingCartService: CarritoService
  ) {}

  async ngOnInit() {
    this.subscription = (await this.shoppingCartService.getCart())
    .subscribe(cart => {
      let temp: any;
      temp = cart.payload.child('/items').val();
      this.cart = new ShoppingCart(temp);
      // this.cart = temp;
      // console.log(this.cart);
    });

  this.productService.getAll()
  .pipe(switchMap( products => {
    let temp: any[];
    temp = products;
    this.products = temp; 
    return this.route.queryParamMap;
    }))
    .subscribe(params => {
      this.category = params.get('category');

      this.filteredProducts = (this.category) ?
        this.products.filter(p => p.category === this.category) : 
        this.products;
    }); 
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
