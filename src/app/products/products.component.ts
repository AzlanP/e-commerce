import { Component, OnInit } from '@angular/core';
import { ProductoService } from '../producto.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
productos$: Observable<any>
  constructor(private productoService : ProductoService) {
    this.productos$ = this.productoService.getAll()
   }

  ngOnInit() {
  }

}
