import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'greetingPipe'
})
export class GreetingPipePipe implements PipeTransform {

  transform(value: any, ...args: any[]): any {
    return 'Ram Ram, ' + value;;
  }
}
