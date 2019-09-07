import { ProductoService } from './../producto.service';
import { CategoriaService } from './../categoria.service';
import { Component, OnInit } from '@angular/core';
import { AngularFireList } from '@angular/fire/database';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'nuevoproducto',
  templateUrl: './nuevoproducto.component.html',
  styleUrls: ['./nuevoproducto.component.css']
})
export class NuevoproductoComponent {
  
   categorias$: Observable<any>
  constructor(
    private router : Router,
    private categoriaService: CategoriaService,
    private  productoService: ProductoService) {
   
   this.categorias$ = this.categoriaService.getCategoria()
   
  }
   guardar(producto){
     this.productoService.nuevoProducto(producto);
     this.router.navigate(['/products']) //luego de cargar el producto te devuelve a la pagina principal
   }


}
