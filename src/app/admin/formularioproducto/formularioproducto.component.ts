import { Producto } from './../../model/producto';

import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { Router, ActivatedRoute } from '@angular/router';
import { take } from 'rxjs/operators';
import { ProductoService } from 'src/app/servicios/producto.service';
import { CategoriaService } from 'src/app/servicios/categoria.service';
@Component({
  selector: 'formularioproducto',
  templateUrl: './formularioproducto.component.html',
  styleUrls: ['./formularioproducto.component.css']
})
export class FormularioproductoComponent implements OnDestroy {
  id;
  producto= {} //se inicializa como objeto en blanco para que no de error en compilacion
  categorias$: Observable<any>
  sub: Subscription;
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private categoriaService: CategoriaService,
    private productoService: ProductoService) {

    this.categorias$ = this.categoriaService.getCategoria()
    this.id = this.route.snapshot.paramMap.get('id')
    if (this.id) this.sub = this.productoService.getProducto(this.id).pipe(take(1))
      .subscribe(p => this.producto = p)
  }
  guardar(producto) {
    if (this.id) {
      this.productoService.updateProducto(this.id, producto)
    } else {
      this.productoService.nuevoProducto(producto);
    }
    this.router.navigate(['/admin/productos']) //luego de cargar el producto te devuelve a la pagina principal
  }
  eliminar() {
    if (confirm("Esta seguro de eliminar este producto?")) {
      this.productoService.eliminarProducto(this.id)
      this.router.navigate(['/admin/productos']);
    }
  }
  ngOnDestroy() {

  }

}
