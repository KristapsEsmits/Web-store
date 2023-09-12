import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AppComponent} from './app.component';

import {ToolbarComponent} from './shared/components/toolbar/toolbar.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import {SidenavComponent} from './shared/components/sidenav/sidenav.component';
import {MatSidenavModule} from "@angular/material/sidenav";
import {MatIconModule} from "@angular/material/icon";
import {MatButtonModule} from "@angular/material/button";
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatInputModule} from "@angular/material/input";
import {ReactiveFormsModule} from "@angular/forms";
import {FooterComponent} from './shared/components/footer/footer.component';
import {RouterLink, RouterOutlet} from "@angular/router";
import {AppRoutingModule} from './app-routing.module';
import {HomeComponent} from './home/components/home/home.component';
import { AdminComponent } from './admin/componenets/admin/admin.component';
import { CartComponent } from './cart/components/cart/cart.component';
import { ItemViewComponent } from './ItemView/components/item-view/item-view.component';



@NgModule({
  declarations: [
    AppComponent,

    ToolbarComponent,
    SidenavComponent,
    FooterComponent,

    HomeComponent,
     AdminComponent,
     CartComponent,
     ItemViewComponent,

  ],
  imports: [
    BrowserModule,
    MatToolbarModule,
    MatSidenavModule,
    MatIconModule,
    MatButtonModule,
    BrowserAnimationsModule,
    MatInputModule,
    ReactiveFormsModule,
    RouterOutlet,
    RouterLink,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
