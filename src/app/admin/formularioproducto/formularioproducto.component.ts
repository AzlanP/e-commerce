import { ProductoService } from '../../producto.service';
import { CategoriaService } from '../../categoria.service';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { Router, ActivatedRoute } from '@angular/router';
import { take } from 'rxjs/operators';
@Component({
  selector: 'formularioproducto',
  templateUrl: './formularioproducto.component.html',
  styleUrls: ['./formularioproducto.component.css']
})
export class FormularioproductoComponent implements OnDestroy {
  
   producto = {}; //se inicializa como objeto en blanco para que no de error en compilacion
   categorias$: Observable<any>
   sub : Subscription ;
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private categoriaService: CategoriaService,
    private  productoService: ProductoService) {
   
   this.categorias$ = this.categoriaService.getCategoria()
   let id= this.route.snapshot.paramMap.get('id')
   if (id) this.sub =this.productoService.getProducto(id).pipe(take(1)).subscribe(p => this.producto  = p) 

   
  }
   guardar(producto){
     this.productoService.nuevoProducto(producto);
     this.router.navigate(['/products']) //luego de cargar el producto te devuelve a la pagina principal
   }
   ngOnDestroy() {
    
  }

}
