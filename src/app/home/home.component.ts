import { Component, OnInit } from '@angular/core';
import { Imagenes } from '../objetos/imagenes.model';
import { ImagenesService } from '../imagenes.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{
  imagenes:Imagenes[] = [];

  constructor(
    private imagenService: ImagenesService
  ) {}

  ngOnInit(): void{
    this.imagenes = this.imagenService.obtenerImagen();
  }

}