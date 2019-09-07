import { AngularFireDatabase } from '@angular/fire/database';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductoService {
 

  constructor(private db: AngularFireDatabase) { }


  nuevoProducto(producto) {
return this.db.list('/products').push(producto) //retorna una promesa
  }
  getAll(){
    return this.db.list('/products').valueChanges();
  }
}
