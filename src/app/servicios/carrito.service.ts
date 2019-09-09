import { AngularFireDatabase } from '@angular/fire/database';
import { Injectable } from '@angular/core';
import { Producto } from '../model/producto';
import { take } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class CarritoService {

  constructor(private db: AngularFireDatabase) { }


  async getCart() {
    const cartId = await this.getOrCreateCartId();
    return this.db.object('/shopping-carts/' + cartId).snapshotChanges();
  }

  private async getOrCreateCartId() {
    let cartId = localStorage.getItem('cartId');
    if (cartId) return cartId;
    let result = await this.create();
    localStorage.setItem('cartId', result.key);
    return result.key;
  }

  async addToCart(producto: Producto) {
    this.updateItemQuantity(producto, 1);
  }

  async clearCart() {
    // tslint:disable-next-line:prefer-const
    let cartId = await this.getOrCreateCartId();
    this.db.object('/shopping-carts/' + cartId + '/items').remove();
  }

  private create() {
    return this.db.list('/shopping-carts').push({
      dateCreated: new Date().getTime()
    });
  }

  async removeFromCart(producto: Producto) {
    this.updateItemQuantity(producto, -1);
  }

  private async updateItemQuantity(producto: Producto, change: number) {
    const cartId = await this.getOrCreateCartId();
    const item = this.getItem(cartId, producto.key);

    item.snapshotChanges().pipe(take(1))
      .subscribe(data => {
        const quantity = (data.payload.child('/quantity').val() || 0) + change;
        if (quantity === 0) {
          item.remove();
        } else {
          item.update({
            producto: producto,
            quantity: quantity
          });
        }

      });
  }
  private getItem(cartId: string, productoId: string) {
    return this.db.object('/shopping-carts/' + cartId + '/items/' + productoId);
  }
}
