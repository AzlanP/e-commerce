import { AngularFireDatabase } from '@angular/fire/database';
import { Injectable } from '@angular/core';

import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ProductoService {


  constructor(private db: AngularFireDatabase,
  ) { }


  nuevoProducto(producto) {
    return this.db.list('/products').push(producto) //retorna una promesa
  }
  getAll() {
    return this.db.list('/products', ref => (ref.orderByChild('name')))
      .snapshotChanges().pipe(
        map(actions =>
          actions.map(a => ({ key: a.payload.key, ...a.payload.val() }))
        )
      );
  }
  getProducto(idProducto) {
    return this.db.object('/products/' + idProducto).valueChanges();
  }
  updateProducto(idProducto, producto) {
    return this.db.object('/products/' + idProducto).update(producto);

  }
  eliminarProducto(idProducto) {
    return this.db.object('/products/' + idProducto).remove();
  }


}
