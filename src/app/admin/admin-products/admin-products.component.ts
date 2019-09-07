import { Component, OnInit } from '@angular/core';

import { Observable } from 'rxjs';
import { ProductoService } from 'src/app/producto.service';

@Component({
  selector: 'app-admin-products',
  templateUrl: './admin-products.component.html',
  styleUrls: ['./admin-products.component.css']
})
export class AdminProductsComponent  {

  productos$: Observable<any>
  constructor(private productoService : ProductoService) {
    this.productos$ = this.productoService.getAll()
   }

}
