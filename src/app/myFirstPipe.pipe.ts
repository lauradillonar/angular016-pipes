import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name: 'resumir'
})

export class MyFirstPipe implements PipeTransform{
    transform(valor: string, args?:any) {
        /* si el valor es nulo/undefined */
        if (!valor){
            return null;
        }
        let newValor: string;
        if(valor.indexOf(' ') !== -1 && args === true){
            newValor = valor.substring(0, valor.indexOf(' '));
            console.log('%c Valor original: '+ valor,'background: #222; color: #bada55;');
            console.log('%c Valor retornado: '+ newValor,'background: #bada55; color: #222;');
            console.log('%c Argumentos input: '+ args,'background: red; color: #222;');
            return newValor;
        }else{
            return valor;
        }
    }
}