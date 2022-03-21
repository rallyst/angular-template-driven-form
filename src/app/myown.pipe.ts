import { Pipe, PipeTransform } from '@angular/core';

@Pipe({name: 'myOwnPipe'})
export class MyOwnPipe implements PipeTransform {
  transform(value: string): string {
    return value.split('').map((item, index) => {
      if (index % 2 === 0) {
        return item.toUpperCase();
      } else  {
        return item.toLowerCase();
      }
    }).join('')
  } 
}