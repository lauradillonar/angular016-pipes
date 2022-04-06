import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name: 'resumir'
})

export class MyFirstPipe implements PipeTransform{
    transform(valor: string) {
        console.log('%c Pipe Done','background: #222; color: #bada55;');
    }
}