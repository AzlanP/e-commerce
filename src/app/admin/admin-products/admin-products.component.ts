import { Component, OnInit, OnDestroy } from '@angular/core';

import { Observable, Subscription } from 'rxjs';
import { ProductoService } from 'src/app/servicios/producto.service';
import { Producto } from 'src/app/model/producto';

@Component({
  selector: 'app-admin-products',
  templateUrl: './admin-products.component.html',
  styleUrls: ['./admin-products.component.css']
})
export class AdminProductsComponent implements OnDestroy{

  //productos$: Observable<any>
  subcription : Subscription;
  productos: Producto[] = [];
  productosFiltrados: Producto[] = [];
  constructor(private productoService : ProductoService) {
   // this.productos$ = this.productoService.getAll()
     this.subcription= this.productoService.getAll()
     .subscribe( productos => {
       const temp: any[] = productos;
        this.productos = temp;
        this.productosFiltrados=this.productos
     });

   }
   buscar(query: string){
     this.productosFiltrados = (query)  ?
         this.productos.filter(p => p.title.toLowerCase().includes(query.toLowerCase())):
         this.productos;
   }


   ngOnDestroy(): void {
     this.subcription.unsubscribe();
   }

}
