import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {Route, RouterModule} from '@angular/router';
import {HomeComponent} from "./home/components/home/home.component";
import {AdminComponent} from "./admin/componenets/admin/admin.component";
import {CartComponent} from "./cart/components/cart/cart.component";
import {ItemViewComponent} from "./ItemView/components/item-view/item-view.component";


const routes: Route[] = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: "full",
  },
  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: 'admin',
    component: AdminComponent,
  },
  {
    path: 'cart',
    component: CartComponent,
  },
  {
    path: 'ItemView',
    component: ItemViewComponent,
  },
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})

export class AppRoutingModule {
}
