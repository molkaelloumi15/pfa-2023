import {Component, OnInit} from '@angular/core';
import {Employe} from '../../../Model/Employe';
import {ActivatedRoute, Router} from '@angular/router';
import {MdbModalRef, MdbModalService} from 'mdb-angular-ui-kit/modal';
import {HttpErrorResponse} from '@angular/common/http';
import {NgForm} from '@angular/forms';
import {EmployeService} from '../../../Services/employe.service';
import {PosteTelephoniqueService} from '../../../Services/poste-telephonique.service';
import {ProjetRechercheService} from '../../../Services/projet-recherche.service';
import {EtudeService} from '../../../Services/etude.service';
import {AvoirEmpService} from '../../../Services/avoir-emp.service';
import {SearchPosteModal} from '../../../components/search-poste-modal/search-poste-modal.component';
import {ProjetRecherche} from '../../../Model/ProjetRecherche';
import {PosteTelephonique} from '../../../Model/PosteTelephonique';
import {SearchProjetModal} from '../../../components/search-projet-modal/search-projet-modal.component';
import {SearchEtudeModal} from '../../../components/search-etude-modal/search-etude-modal.component';
import {AvoirEmpEtud} from '../../../Model/AvoirEmpEtud';
import {Etude} from '../../../Model/Etude';
import {DeleteModal} from '../../../components/delete-modal/delete-modal.component';

@Component({
    selector: 'app-emp-mod',
    templateUrl: './emp-mod.component.html',
    styleUrls: ['./emp-mod.component.scss']
})
export class EmpModComponent implements OnInit {
    listeFonction = ['Ouvrier', 'Amdinistrateur', 'Directeur', 'Rechercheur', 'Informaticien'];
    employer: Employe;
    pos: any = 'Chercher Poste';
    pro = '';
    ModalRef: MdbModalRef<SearchPosteModal>;
    listeEtude: AvoirEmpEtud[] = [];

    constructor(private route: ActivatedRoute,
                private router: Router,
                private empService: EmployeService,
                private posService: PosteTelephoniqueService,
                private projetService: ProjetRechercheService,
                private etudeService: EtudeService,
                private AEEService: AvoirEmpService,
                private modalService: MdbModalService) {
    }

    ngOnInit(): void {
        this.empService.getEmployeById(this.route.snapshot.params.id).subscribe(
            (result: Employe) => {
                this.employer = result;
                this.pos = result.posteTelephonique.numeroAppel;
                if (this.employer.projetRecherche.length !== 0) {
                    this.pro = this.employer.projetRecherche[0].intituleProjetRecherche;
                    for (let i = 1; i < this.employer.projetRecherche.length; i++) {
                        this.pro += ' - ' + this.employer.projetRecherche[i].intituleProjetRecherche;
                    }
                }
                this.getEtudes();
            }, (error: HttpErrorResponse) => {
                alert(error.message);
            }
        );
    }

    getEtudes(): void {
        this.AEEService.getAllAvoirEmpEtudsByEmp(this.employer.numEmp).subscribe(
            (response: AvoirEmpEtud[]) => {
                this.listeEtude = response;
            }, (error: HttpErrorResponse) => {
                alert(error.message);
            }
        );
    }

    onSubmit(form: NgForm) {
        // @ts-ignore
        this.empService.updateEmploye(this.employer).subscribe(
            (resonse: Employe) => {
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
                        this.employer.posteTelephonique = response;
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
                        const index = this.employer.projetRecherche.findIndex
                        ((p: ProjetRecherche) => p.numProjetRecherche === response.numProjetRecherche);
                        if (index !== -1) {
                            this.employer.projetRecherche.splice(index, 1);
                            if (this.employer.projetRecherche.length === 0)
                                this.pro = '';
                        } else {
                            this.employer.projetRecherche.push(response);
                        }
                        if (this.employer.projetRecherche.length !== 0) {
                            this.pro = this.employer.projetRecherche[0].intituleProjetRecherche;
                            for (let i = 1; i < this.employer.projetRecherche.length; i++) {
                                this.pro += ' - ' + this.employer.projetRecherche[i].intituleProjetRecherche;
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

    ajouterEtude() {
        this.ModalRef = this.modalService.open(SearchEtudeModal);
        this.ModalRef.onClose.subscribe((message: any) => {
            // tslint:disable-next-line:triple-equals
            if (message != false) {
                let AEF: AvoirEmpEtud;
                AEF = message;
                AEF.employe = this.employer;
                this.AEEService.addAvoirEmpEtud(AEF).subscribe(
                    (response: AvoirEmpEtud) => {
                        this.getEtudes();
                    }, (error: HttpErrorResponse) => {
                        console.log(error.message);
                    }
                );
            }
        });
    }

    deleteEtude(ee: AvoirEmpEtud) {
        this.ModalRef = this.modalService.open(DeleteModal);
        this.ModalRef.onClose.subscribe((message: any) => {
            // tslint:disable-next-line:triple-equals
            if (message == true)
                this.AEEService.deleteAvoirEmpEtud(ee.employe.numEmp,ee.etude.idEtude,ee.year).subscribe(
                    (resolve: void) => {
                        this.getEtudes();
                    }
                );
        });
    }
}
