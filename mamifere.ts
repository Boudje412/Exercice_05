//Mamifere est un enfant d'animal on importe donc L'interface animal Mamifere en étant héritier
import {Animal} from './animal'; 
export abstract class Mamifere implements Animal{
    _nom:string;
    _poids:number;
    _dateNaissance:Date;

    //Le constructeur d'un mamifere
   constructor (nom:string, poids:number, dateNaissance:string)
    {
        this._nom = nom;
        this._poids = poids;
        this._dateNaissance = new Date(dateNaissance);
    }
    //Getter de mamifere
    public get nom(){
        return this._nom
    };
    public get poids(){
        return this._poids
    };
    public get dateNaissance(){
        return this.dateNaissance
    };
    //Setter de mamifere
    public set nom(nom:string){
        this._nom = nom
    };
    public set poids(poids:number){
        this._poids = poids
    };
    public set dateNaissance(date:Date){
        this._dateNaissance = date
    };
    //methode de mamifere dont tout les enfants d'animal doivent disposer
    display(): void
    {
        console.log('je m\'appelle:'+this.nom)
    }
}
