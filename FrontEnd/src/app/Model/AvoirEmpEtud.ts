import {Employe} from './Employe';
import {Etude} from './Etude';

export interface AvoirEmpEtud {
  employe: Employe;
  etude: Etude;
  year: number;
  salaire: number;

}
