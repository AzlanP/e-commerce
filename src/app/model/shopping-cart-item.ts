import { Producto } from './producto';


export class ShoppingCartItem {

    constructor(public product: Producto, public quantity: number) {
    }

    get totalPrice() { return this.product.price * this.quantity; }
}
