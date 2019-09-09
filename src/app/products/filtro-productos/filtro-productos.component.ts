import { Component, OnInit, Input } from '@angular/core';
import { CategoriaService } from 'src/app/servicios/categoria.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'filtro-productos',
  templateUrl: './filtro-productos.component.html',
  styleUrls: ['./filtro-productos.component.css']
})
export class FiltroProductosComponent implements OnInit {

categorias$: Observable<any>
  @Input('category') category;

  constructor(categoryService: CategoriaService) { 
    this.categorias$ = categoryService.getCategoria();
  }

  ngOnInit() {
  }

}
