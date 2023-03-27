import {PosteTelephonique} from './PosteTelephonique';
import {ProjetRecherche} from './ProjetRecherche';

export interface Employe {
  numEmp: number;
  nomEmp: string;
  posteTelephonique: PosteTelephonique;
  projetRecherche: ProjetRecherche;

}
