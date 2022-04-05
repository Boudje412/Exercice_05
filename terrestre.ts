import {MilieuNaturel} from './milieunaturel'; 
export interface Terrestre extends MilieuNaturel
{
    //les enfants de terrestre devront disposer de ces méthodes
    respirerHorsdeLeau():void
    marcher():void
}