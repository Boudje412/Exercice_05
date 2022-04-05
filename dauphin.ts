//le Dauphin dépendant de aquatique et mamifere ont importe ces classes/interfaces
import {Aquatique} from './aquatique';
import { Mamifere } from './Mamifere';
//Classe du Dauphin
class Dauphin extends Mamifere implements Aquatique 
{
    //Methode du dauphin 
    respirerSousEau():void{
    console.log('Je respire sous l\'eau')
    }
    nager():void{
        console.log('je nage')
    }
    retenirRespiration():void{
        console.log('je retiens ma respiration')
    }
    cliquetter():void{
        console.log('clik clik clik')
    }
}