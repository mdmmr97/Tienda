import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Articulos } from '../objetos/articulos.model';

@Component({
  selector: 'app-articulo-card',
  templateUrl: './articulo-card.component.html',
  styleUrls: ['./articulo-card.component.css']
})
export class ArticuloCardComponent implements OnInit{
  @Input() articulo?:Articulos
  @Output() click: EventEmitter<number> = new EventEmitter<number>();

  constructor(
  ){
  }

  ngOnInit(): void {
    
  }
  public pulsarBoton():void {
    this.click.emit(this.articulo?.getId());
  }
}
