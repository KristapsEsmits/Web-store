import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {Route, RouterModule} from '@angular/router';
import {HomeComponent} from "./home/components/home/home.component";


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
