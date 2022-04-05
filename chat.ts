//le chat dépendant de terrestre et mamifere ont importe ces classes/interfaces
import {Terrestre} from './terrestre';
import { Mamifere } from './mamifere';
//classe du chat
export class Chat extends Mamifere implements Terrestre 
{
    //Methode du chat
    respirerHorsdeLeau():void{
    console.log('Je respire hors de l\'eau')
    }
    marcher():void{
        console.log('je marche')
    }
    miauler():void{
        console.log('miaou miaou')
    }
}