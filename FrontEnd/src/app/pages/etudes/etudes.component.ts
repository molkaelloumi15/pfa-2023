import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {MdbModalRef, MdbModalService} from 'mdb-angular-ui-kit/modal';
import {DeleteModal} from '../../components/delete-modal/delete-modal.component';
import {EtudeService} from '../../Services/etude.service';
import {Etude} from '../../Model/Etude';
import {HttpErrorResponse} from '@angular/common/http';
import {User} from '../../Model/User';

@Component({
    selector: 'app-etudes',
    templateUrl: './etudes.component.html',
    styleUrls: ['./etudes.component.scss']
})
export class EtudesComponent implements OnInit {

    modalRef: MdbModalRef<DeleteModal>;
    public list: Etude[] = [];
    public display: Etude[] = [];
    currentUser: User;
    constructor(private router: Router,
                private modalService: MdbModalService,
                private etudeService: EtudeService) {
    }

    ngOnInit(): void {
        this.currentUser = JSON.parse(sessionStorage.getItem('currentUser'));
        this.getEtude();
    }

    getEtude(): void {
        this.etudeService.getEtudes().subscribe(
            (response: Etude[]) => {
                this.list = response;
                this.display =response;
            }, (error: HttpErrorResponse) => {
                alert(error.message);
            }
        );
    }

    ajouter(): void {
        this.router.navigate(['/etude/etudeAdd']);
    }

    modifier(id: number): void {
        this.router.navigate(['/etude/etudeMod', id]);
    }

    deleteModal(id: number) {
        this.modalRef = this.modalService.open(DeleteModal);
        this.modalRef.onClose.subscribe((message: any) => {
            // tslint:disable-next-line:triple-equals
            if (message == true)
                this.etudeService.deleteEtude(id).subscribe(
                    (resolve: void) => {
                        this.getEtude();
                    }
                );
        });
    }

    public search(key: string): void {
        this.display = [];
        for (const i of this.list) {
            if (i.titreEtude.toLowerCase().indexOf(key.toLowerCase()) !== -1
            ) {
                this.display.push(i);
            }
        }
    }
}
