import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';


@Injectable({
  providedIn: 'root'
})
export class CategoriaService {

  constructor(private db: AngularFireDatabase) { }

  getCategoria(){
    return this.db.list('/categories').valueChanges();
  }
}
