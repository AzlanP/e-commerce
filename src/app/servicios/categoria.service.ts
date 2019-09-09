import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class CategoriaService {

  constructor(private db: AngularFireDatabase) { }

  getCategoria(){
    return this.db.list('/categories', ref => (ref.orderByChild('name')))
    .snapshotChanges().pipe(
      map(actions => 
        actions.map(a => ({ key: a.payload.key, ...a.payload.val() }))
      )
    );
}
  
}
