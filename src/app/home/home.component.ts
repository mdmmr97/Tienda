import { Component, OnInit } from '@angular/core';
import { Imagenes } from '../objetos/imagenes.model';
import { Categorias } from '../objetos/categorias.model';
import { ImagenesService } from '../imagenes.service';
import { CategoriasService } from '../categorias.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{
  imagenes:Imagenes[] = [];
  categorias: Categorias[] = [];

  constructor(
    private router: Router,
    private imagenService: ImagenesService,
    private categoriaService: CategoriasService
  ) {}

  ngOnInit(): void{
    this.imagenes = this.imagenService.obtenerImagen();
    this.categorias = this.categoriaService.obtenerCategorias();
  }

  public navegarCategoria(idCategoria: number): void {
    this.router.navigate(['categoria', idCategoria]);
  }
}