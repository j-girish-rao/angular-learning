import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'greetingPipe'
})
export class GreetingPipePipe implements PipeTransform {

  transform(value: any, ...args: any[]): any {
    let jsr_name = 'Jai Sri Ram!';
    let response =  '';
    for(let i=0; i<value; i++) {
      response = response + ' ' +  jsr_name;
    }
    return response;
  }
}
