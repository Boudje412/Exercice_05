//declaration de l'interface Animal
export interface Animal {
   //Un animal doit comprendre ces variables
   _nom:string;
   _poids:number;
   _dateNaissance:Date;
   //methode de l'interface Animal dont devront disposés ses enfants
   display(): void
}