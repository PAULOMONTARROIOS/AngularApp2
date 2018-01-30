import { Pipe, PipeTransform } from "@angular/core";

@Pipe({name : 'descricaoReduzida'})
export class DescricaoReduzida implements PipeTransform {
     
    transform(texto: string, truncarEm : number, inicarEm : number) : string {
        if( texto.length  > truncarEm){
            return texto.substr(inicarEm, truncarEm) + '...';
        }
        else{
            return texto;
        }
    }

}