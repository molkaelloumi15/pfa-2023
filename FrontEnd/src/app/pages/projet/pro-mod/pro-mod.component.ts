import {Component, OnInit} from '@angular/core';
import {MdbModalRef, MdbModalService} from 'mdb-angular-ui-kit/modal';
import {SearchDepartementModal} from '../../../components/serach-departement-modal/serach-departement-modal.component';
import {ProjetRecherche} from '../../../Model/ProjetRecherche';
import {ActivatedRoute, Router} from '@angular/router';
import {ProjetRechercheService} from '../../../Services/projet-recherche.service';
import {DepartementService} from '../../../Services/departement.service';
import {HttpErrorResponse} from '@angular/common/http';
import {NgForm} from '@angular/forms';
import {Departement} from '../../../Model/Departement';

@Component({
    selector: 'app-pro-mod',
    templateUrl: './pro-mod.component.html',
    styleUrls: ['./pro-mod.component.scss']
})
export class ProModComponent implements OnInit {

    dep: any = 'Chercher Départment';
    projet: ProjetRecherche;
    modalRef: MdbModalRef<SearchDepartementModal>;

    constructor(private route: ActivatedRoute,
                private router: Router,
                private proService: ProjetRechercheService,
                private depService: DepartementService,
                private modalService: MdbModalService) {
    }

    ngOnInit(): void {
        this.proService.getProjetRechercheById(this.route.snapshot.params.id).subscribe(
            (result: ProjetRecherche) => {
                this.projet = result;
                this.dep = 'Departement ' + result.departement.intituleDep;
            }, (error: HttpErrorResponse) => {
                alert(error.message);
            }
        );
    }

    onSubmit(form: NgForm) {
        // @ts-ignore
        this.proService.updateProjetRecherche(this.projet).subscribe(
            (resonse: ProjetRecherche) => {
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
                        this.projet.departement = response;
                        this.dep = 'Departement ' + response.intituleDep;
                    }, (error: HttpErrorResponse) => {
                        console.log(error);
                    }
                );
            }
        });
    }
}
