import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'mySecondPipe'
})
export class MySecondPipe implements PipeTransform {

  transform(value: string, args?:any): any {
    if(value){
      if (args && typeof args === 'number'){
        return value.substring(0,args);
    
      }
      return value;
    }
    console.log('null value en Pipe');
    return '';
  }

}
