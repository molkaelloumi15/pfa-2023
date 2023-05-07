import {Component, OnInit} from '@angular/core';
import {Departement} from '../../../Model/Departement';
import {MdbModalRef, MdbModalService} from 'mdb-angular-ui-kit/modal';
import {Router} from '@angular/router';
import {NgForm} from '@angular/forms';
import {HttpErrorResponse} from '@angular/common/http';
import {PosteTelephonique} from '../../../Model/PosteTelephonique';
import {SearchPosteModal} from '../../../components/search-poste-modal/search-poste-modal.component';
import {PosteTelephoniqueService} from '../../../Services/poste-telephonique.service';
import {EmployeService} from '../../../Services/employe.service';
import {ProjetRecherche} from '../../../Model/ProjetRecherche';
import {Etude} from '../../../Model/Etude';
import {Employe} from '../../../Model/Employe';
import {ProjetRechercheService} from '../../../Services/projet-recherche.service';
import {EtudeService} from '../../../Services/etude.service';
import {AvoirEmpEtud} from '../../../Model/AvoirEmpEtud';
import {AvoirEmpService} from '../../../Services/avoir-emp.service';
import {SearchProjetModal} from '../../../components/search-projet-modal/search-projet-modal.component';
import {SearchEtudeModal} from '../../../components/search-etude-modal/search-etude-modal.component';

@Component({
    selector: 'app-emp-add',
    templateUrl: './emp-add.component.html',
    styleUrls: ['./emp-add.component.scss']
})
export class EmpAddComponent implements OnInit {
    listeFonction = ['Ouvrier', 'Amdinistrateur', 'Directeur', 'Rechercheur', 'Informaticien'];

    pos: any = 'Chercher Poste';
    poste: PosteTelephonique;

    pro = '';
    projetRecherches: ProjetRecherche[] = [];

    ModalRef: MdbModalRef<SearchPosteModal>;

    constructor(private router: Router,
                private modalService: MdbModalService,
                private posService: PosteTelephoniqueService,
                private empService: EmployeService,
                private projetService: ProjetRechercheService) {
    }

    ngOnInit(): void {
    }

    onSubmit(form: NgForm) {
        const emp = {
            nomEmp: form.value.nom,
            fonctionEmp: form.value.fonction,
            posteTelephonique: this.poste,
            projetRecherche: this.projetRecherches
        };
        // @ts-ignore
        this.empService.addEmploye(emp).subscribe(
            (resonse: Employe) => {
                console.log(resonse);
                this.router.navigate(['emp']);
            }, (error: any) => {
                console.log(error.messge);
            }
        );
    }

    searchPoste() {
        this.ModalRef = this.modalService.open(SearchPosteModal);
        this.ModalRef.onClose.subscribe((message: any) => {
            // tslint:disable-next-line:triple-equals
            if (message != false) {
                this.posService.getPosteTelephoniqueById(message).subscribe(
                    (response: PosteTelephonique) => {
                        this.poste = response;
                        this.pos = response.numeroAppel;
                    }, (error: HttpErrorResponse) => {
                        console.log(error);
                    }
                );
            }
        });
    }

    searchProjets() {
        this.ModalRef = this.modalService.open(SearchProjetModal);
        this.ModalRef.onClose.subscribe((message: any) => {
            if (message !== false) {
                this.projetService.getProjetRechercheById(message).subscribe(
                    (response: ProjetRecherche) => {
                        const index = this.projetRecherches.findIndex
                        ((p: ProjetRecherche) => p.numProjetRecherche === response.numProjetRecherche);
                        if (index !== -1) {
                            this.projetRecherches.splice(index, 1);
                            if (this.projetRecherches.length === 0)
                                this.pro = '';
                        } else {
                            this.projetRecherches.push(response);
                        }
                        if (this.projetRecherches.length !== 0) {
                            this.pro = this.projetRecherches[0].intituleProjetRecherche;
                            for (let i = 1 ; i < this.projetRecherches.length ; i++){
                                this.pro += ' - ' + this.projetRecherches[i].intituleProjetRecherche;
                            }
                        }
                    },
                    (error: HttpErrorResponse) => {
                        console.log(error);
                    }
                );
            }
        });
    }
}
