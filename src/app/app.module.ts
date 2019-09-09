import { UserService } from './servicios/user.service';
import { AuthGuard } from 'src/app/servicios/auth-guard.service';
import { AuthService } from 'src/app/servicios/auth.service';
import { CarritoService } from './servicios/carrito.service';
import { ProductoService } from './servicios/producto.service';
import { CategoriaService } from './servicios/categoria.service';

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AngularFireModule } from '@angular/fire'; //importado al inicio
import { AngularFireDatabaseModule } from '@angular/fire/database'; //importado al inicio
import { AngularFireAuthModule } from '@angular/fire/auth'; //importado al inicio
import { RouterModule } from '@angular/router'
import {NgbModule } from '@ng-bootstrap/ng-bootstrap'
import {FormsModule } from '@angular/forms'   //lo importe cuando se hizo uso en html de ngModel
import { CustomFormsModule } from 'ng2-validation' //importado de la libreria ng2-validation


import { AppComponent } from './app.component';
import { environment } from 'src/environments/environment';
import { BsNavbarComponent } from './bs-navbar/bs-navbar.component';
import { HomeComponent } from './home/home.component';
import { ProductsComponent } from './products/products.component';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import { CheckOutComponent } from './check-out/check-out.component';
import { OrderSuccessComponent } from './order-success/order-success.component';
import { MyOrdersComponent } from './my-orders/my-orders.component';
import { AdminProductsComponent } from './admin/admin-products/admin-products.component';
import { AdminOrdersComponent } from './admin/admin-orders/admin-orders.component';
import { LoginComponent } from './login/login.component';
import { FormularioproductoComponent } from './admin/formularioproducto/formularioproducto.component';
import { FiltroProductosComponent } from './products/filtro-productos/filtro-productos.component';
import { CardProductoComponent } from './products/card-producto/card-producto.component';
import { CantidadProductosComponent } from './products/cantidad-productos/cantidad-productos.component';




@NgModule({
  declarations: [
    AppComponent,
    BsNavbarComponent,
    HomeComponent,
    ShoppingCartComponent,
    CheckOutComponent,
    OrderSuccessComponent,
    MyOrdersComponent,
    AdminProductsComponent,
    AdminOrdersComponent,
    LoginComponent,
    ProductsComponent,
    FormularioproductoComponent,
    FiltroProductosComponent,
    CardProductoComponent,
    CantidadProductosComponent
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    NgbModule,
    FormsModule,
    CustomFormsModule,
    RouterModule.forRoot([
      { path:'', component: ProductsComponent},
      { path:'login', component:LoginComponent},
      { path:'my/orders', component: MyOrdersComponent , canActivate: [AuthGuard] },
      { path:'products', component: ProductsComponent },
      { path:'shopping-cart', component: ShoppingCartComponent },
      { path:'check-out', component: CheckOutComponent, canActivate: [AuthGuard]},
      { path:'order-success', component: OrderSuccessComponent , canActivate: [AuthGuard]},
      { path:'admin/productos', component:AdminProductsComponent},
      { path:'admin/orders', component:AdminOrdersComponent},
      {path:'admin/productos/nuevo', component:FormularioproductoComponent},
      {path:'admin/productos/:id', component:FormularioproductoComponent}
    ])
  ],
  providers: [
    CategoriaService,
    ProductoService,
    CarritoService,
    AuthService,
    AuthGuard,
    UserService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
