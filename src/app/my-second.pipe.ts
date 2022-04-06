import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'mySecond'
})
export class MySecondPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
