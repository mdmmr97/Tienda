import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CabeceraComponent } from './cabecera/cabecera.component';
import { NosotrosComponent } from './nosotros/nosotros.component';
import { HomeComponent } from './home/home.component';
import { ImagenesListComponent } from './imagenes-list/imagenes-list.component';
import { CategoriaComponent } from './categoria/categoria.component';
import { ArticuloComponent } from './articulo/articulo.component';
import { MonedaPipe } from './moneda.pipe';
import { ArticuloCardComponent } from './articulo-card/articulo-card.component';

@NgModule({
  declarations: [
    AppComponent,
    CabeceraComponent,
    NosotrosComponent,
    HomeComponent,
    ImagenesListComponent,
    CategoriaComponent,
    ArticuloComponent,
    MonedaPipe,
    ArticuloCardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
