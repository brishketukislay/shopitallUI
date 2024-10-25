import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ProductDetailsComponent} from './product-details/product-details.component';
import {TilesComponent} from './tiles/tiles.component'

const routes: Routes = [
  { path: '', component: TilesComponent, pathMatch: 'full',},
  { path: 'product-detail', component: ProductDetailsComponent }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
//****************** */
// import { NgModule } from '@angular/core';
// import { RouterModule, Routes, RouteReuseStrategy } from '@angular/router';
// import { ProductDetailsComponent } from './product-details/product-details.component';
// import { TilesComponent } from './tiles/tiles.component';

// const routes: Routes = [
//   { path: '', component: TilesComponent },
//   { path: 'product-detail', component: ProductDetailsComponent }
// ];

// // Custom RouteReuseStrategy to prevent route reuse
// import { Injectable } from '@angular/core';
// import { ActivatedRouteSnapshot, DetachedRouteHandle } from '@angular/router';

// @Injectable()
// export class CustomReuseStrategy implements RouteReuseStrategy {
//   shouldDetach(route: ActivatedRouteSnapshot): boolean { return false; }
//   store(route: ActivatedRouteSnapshot, handle: DetachedRouteHandle | null): void {}
//   shouldAttach(route: ActivatedRouteSnapshot): boolean { return false; }
//   retrieve(route: ActivatedRouteSnapshot): DetachedRouteHandle | null { return null; }
//   shouldReuseRoute(future: ActivatedRouteSnapshot, curr: ActivatedRouteSnapshot): boolean {
//     return future.routeConfig === curr.routeConfig;
//   }
// }

// @NgModule({
//   imports: [RouterModule.forRoot(routes)],
//   exports: [RouterModule],
//   providers: [
//     { provide: RouteReuseStrategy, useClass: CustomReuseStrategy }
//   ]
// })
// export class AppRoutingModule { }
