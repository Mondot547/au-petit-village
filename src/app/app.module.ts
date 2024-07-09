import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { AboutComponent } from './pages/about/about.component';
import { HomeComponent } from './pages/home/home.component';
import { SortByPricePipe } from './pipes/sort-by-price.pipe';
import { SortByNamePipe } from './pipes/sort-by-name.pipe';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { CardProductComponent } from './components/card-product/card-product.component';
import { ProductDetailComponent } from './components/product-detail/product-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    AboutComponent,
    HomeComponent,
    SortByPricePipe,
    SortByNamePipe,
    CardProductComponent,
    ProductDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
