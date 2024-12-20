// import { NgModule } from '@angular/core';
// import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

// import { AppRoutingModule } from './app-routing.module';
// import { AppComponent } from './app.component';
// import { HeaderComponent } from './header/header.component';
// import { TilesComponent } from './tiles/tiles.component';
// import { provideHttpClient } from '@angular/common/http';
// import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
// import { LoaderComponent } from './loader/loader.component';
// import { MatTooltipModule } from '@angular/material/tooltip';
// // import { HttpClient } from '@angular/common/http';
// import { NgApexchartsModule } from "ng-apexcharts";
// import { ProductDetailsComponent } from './product-details/product-details.component';

// @NgModule({
//   declarations: [
//     AppComponent,
//     HeaderComponent,
//     TilesComponent,
//     LoaderComponent,
//     ProductDetailsComponent
//   ],
//   imports: [
//     BrowserModule,
//     AppRoutingModule,
//     MatTooltipModule,
//     NgApexchartsModule
//   ],
//   providers: [
//     provideClientHydration(),
//     provideHttpClient(),
//     provideAnimationsAsync()
//   ],
//   bootstrap: [AppComponent]
// })
// export class AppModule { }
//*************** */
import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { TilesComponent } from './tiles/tiles.component';
import { provideHttpClient, withFetch } from '@angular/common/http';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { LoaderComponent } from './loader/loader.component';
import { MatTooltipModule } from '@angular/material/tooltip';
import { NgApexchartsModule } from "ng-apexcharts";
import { ProductDetailsComponent } from './product-details/product-details.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    TilesComponent,
    LoaderComponent,
    ProductDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatTooltipModule,
    NgApexchartsModule
  ],
  providers: [
    provideClientHydration(),
    provideHttpClient(withFetch()),
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
