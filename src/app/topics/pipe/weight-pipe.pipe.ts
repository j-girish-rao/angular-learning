import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'weightPipe'
})
export class WeightPipePipe implements PipeTransform {

  transform(value: number, ...args: unknown[]): string {
    value = Math.round((value + Number.EPSILON) * 100) / 100
    return `${value} Kilos`;
  }

}
