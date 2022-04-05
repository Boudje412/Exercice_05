import {MilieuNaturel} from './milieunaturel'; 
//declaration de l'interface Aquatique
export interface Aquatique extends MilieuNaturel
{
    //les enfants d'Aquatique devront disposer de ces méthodes
    respirerSousEau():void
    nager():void
}