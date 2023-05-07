import {Component, OnInit} from '@angular/core';
import {Departement} from '../../../Model/Departement';
import {MdbModalRef, MdbModalService} from 'mdb-angular-ui-kit/modal';
import {SearchDepartementModal} from '../../../components/serach-departement-modal/serach-departement-modal.component';
import {Router} from '@angular/router';
import {DepartementService} from '../../../Services/departement.service';
import {NgForm} from '@angular/forms';
import {HttpErrorResponse} from '@angular/common/http';
import {ProjetRechercheService} from '../../../Services/projet-recherche.service';
import {ProjetRecherche} from '../../../Model/ProjetRecherche';

@Component({
    selector: 'app-pro-add',
    templateUrl: './pro-add.component.html',
    styleUrls: ['./pro-add.component.scss']
})
export class ProAddComponent implements OnInit {

    dep: any = 'Chercher Départment';
    departement: Departement;
    modalRef: MdbModalRef<SearchDepartementModal>;

    constructor(private router: Router,
                private modalService: MdbModalService,
                private depService: DepartementService,
                private proService: ProjetRechercheService) {
    }

    ngOnInit(): void {
    }

    onSubmit(form: NgForm) {
        const pro = {
            intituleProjetRecherche: form.value.intitule,
            budgetProjetRecherche: form.value.budget,
            departement: this.departement
        };
        // @ts-ignore
        this.proService.addProjetRecherche(pro).subscribe(
            (resonse: ProjetRecherche) => {
                console.log(resonse);
                this.router.navigate(['projet_recherche']);
            }, (error: any) => {
                console.log(error.messge);
            }
        );
    }

    searchDepart() {
        this.modalRef = this.modalService.open(SearchDepartementModal);
        this.modalRef.onClose.subscribe((message: any) => {
            // tslint:disable-next-line:triple-equals
            if (message != false) {
                this.depService.getDepartementById(message).subscribe(
                    (response: Departement) => {
                        this.departement = response;
                        this.dep = 'Departement ' + response.intituleDep;
                    }, (error: HttpErrorResponse) => {
                        console.log(error);
                    }
                );
            }
        });
    }
}
