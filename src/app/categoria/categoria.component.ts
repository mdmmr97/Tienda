import { Component, OnInit} from '@angular/core';
import { Articulos } from '../objetos/articulos.model';
import { ArticulosService } from '../articulos.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-categoria',
  templateUrl: './categoria.component.html',
  styleUrls: ['./categoria.component.css']
})
export class CategoriaComponent implements OnInit{
  articulos: Articulos[] = [];
  
  constructor(
    private router: Router,
    private articulosService: ArticulosService
  ){
  }

  ngOnInit(): void{
    this.articulos = this.articulosService.obenerArticulos();
  }

  public navegarArticulo(idArticulo: number): void {
    this.router.navigate(['/articulo', idArticulo]);
  }
}
