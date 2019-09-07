import { ProductoService } from './producto.service';
import { CategoriaService } from './categoria.service';

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
    FormularioproductoComponent
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
      { path:'', component: HomeComponent },
      { path:'my/orders', component: MyOrdersComponent },
      { path:'products', component: ProductsComponent },
      { path:'shopping-cart', component: ShoppingCartComponent },
      { path:'check-out', component: CheckOutComponent },
      { path:'order-success', component: OrderSuccessComponent },
      { path:'login', component:LoginComponent},
      { path:'admin/productos', component:AdminProductsComponent},
      { path:'admin/orders', component:AdminOrdersComponent},
      {path:'admin/productos/nuevo', component:FormularioproductoComponent},
      {path:'admin/productos/:id', component:FormularioproductoComponent}
    ])
  ],
  providers: [
    CategoriaService,
    ProductoService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
