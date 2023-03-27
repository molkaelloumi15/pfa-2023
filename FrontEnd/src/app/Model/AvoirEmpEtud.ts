import {Employe} from './Employe';
import {Etude} from './Etude';

export interface AvoirEmpEtud {
  IdAvoirEmpEtud: number;
  employe: Employe;
  etude: Etude;
  date: Date;
  salaire: number;

}
