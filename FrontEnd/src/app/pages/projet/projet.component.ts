import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {DeleteModal} from '../../components/delete-modal/delete-modal.component';
import {MdbModalRef, MdbModalService} from 'mdb-angular-ui-kit/modal';
import {ProjetRecherche} from '../../Model/ProjetRecherche';
import {ProjetRechercheService} from '../../Services/projet-recherche.service';
import {HttpErrorResponse} from '@angular/common/http';
import {User} from '../../Model/User';

@Component({
    selector: 'app-projet',
    templateUrl: './projet.component.html',
    styleUrls: ['./projet.component.scss']
})
export class ProjetComponent implements OnInit {

    modalRef: MdbModalRef<DeleteModal>;
    public list: ProjetRecherche[] = [];
    public display: ProjetRecherche[] = [];
    currentUser: User = {
        mail: '',
        pass: '',
        username: '',
        fonction: ''
    };

    constructor(private router: Router,
                private modalService: MdbModalService,
                private projetService: ProjetRechercheService) {
    }

    ngOnInit(): void {
        if (JSON.parse(sessionStorage.getItem('currentUser')) !== null)
            this.currentUser = JSON.parse(sessionStorage.getItem('currentUser'));
        this.getProjet();
    }

    getProjet(): void {
        this.projetService.getProjetRecherches().subscribe(
            (response: ProjetRecherche[]) => {
                this.list = response;
                this.display = response;
            }, (error: HttpErrorResponse) => {
                alert(error.message);
            }
        );
    }

    ajouter(): void {
        this.router.navigate(['/projet_recherche/proAdd']);
    }

    consulter(id: number): void {
        this.router.navigate(['/projet_recherche/proCon', id]);
    }

    modifier(id: number): void {
        this.router.navigate(['/projet_recherche/proMod', id]);
    }


    deleteModal(id: number) {
        this.modalRef = this.modalService.open(DeleteModal);
        this.modalRef.onClose.subscribe((message: any) => {
            // tslint:disable-next-line:triple-equals
            if (message == true)
                this.projetService.deleteProjetRecherche(id).subscribe(
                    (resolve: void) => {
                        this.getProjet();
                    }
                );
        });
    }

    public search(key: string): void {
        this.display = [];
        for (const i of this.list) {
            if (i.intituleProjetRecherche.toLowerCase().indexOf(key.toLowerCase()) !== -1
                || i.budgetProjetRecherche.toString().indexOf(key.toLowerCase()) !== -1
                || i.departement.intituleDep.toLowerCase().indexOf(key.toLowerCase()) !== -1
            ) {
                this.display.push(i);
            }
        }
    }
}
