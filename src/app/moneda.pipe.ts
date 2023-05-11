import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'moneda'
})
export class MonedaPipe implements PipeTransform {

  transform(precio:number): string {
    const formatter = new Intl.NumberFormat('es-Es',{
      style: 'currency',
      currency:'EUR',
      minimumFractionDigits: 2
    });
    return formatter.format(precio);
  }

}
