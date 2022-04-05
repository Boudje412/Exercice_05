import {MilieuNaturel} from './milieunaturel';
import {Animal} from './animal';
import {Mamifere} from './mamifere';
import {Terrestre} from './terrestre';
import { Aquatique } from './aquatique';
import {Chat} from './chat';
import { Dauphin } from './dauphin';

const minou = new Chat('poupoune',82,'2022-12-10');
minou.miauler();
console.log(minou.nom);