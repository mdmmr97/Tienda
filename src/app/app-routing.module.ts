import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { NosotrosComponent } from './nosotros/nosotros.component';
import { CategoriaComponent } from './categoria/categoria.component';
import { ArticuloComponent } from './articulo/articulo.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'nosotros', component: NosotrosComponent},
  {path: 'categoria/:idCategoria', component:CategoriaComponent},
  {path: 'articulo/:idArticulo', component:ArticuloComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
