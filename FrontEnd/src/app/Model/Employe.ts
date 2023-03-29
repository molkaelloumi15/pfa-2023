import {PosteTelephonique} from './PosteTelephonique';
import {ProjetRecherche} from './ProjetRecherche';

export interface Employe {
  numEmp: number;
  nomEmp: string;
  fonctionEmp: string;
  posteTelephonique: PosteTelephonique;
  projetRecherche: ProjetRecherche[];

}
