import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ProductDetailsComponent} from './product-details/product-details.component';
import {TilesComponent} from './tiles/tiles.component'

const routes: Routes = [
  // { path: '/', component: TilesComponent, pathMatch: 'full',},
  { path: 'product-detail', component: ProductDetailsComponent }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
