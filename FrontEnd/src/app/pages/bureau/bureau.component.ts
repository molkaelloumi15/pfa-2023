import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {MdbModalRef, MdbModalService} from 'mdb-angular-ui-kit/modal';
import {DeleteModal} from '../../components/delete-modal/delete-modal.component';
import {HttpErrorResponse} from '@angular/common/http';
import {BureauService} from '../../Services/bureau.service';
import {Bureau} from '../../Model/Bureau';
import {User} from '../../Model/User';

@Component({
    selector: 'app-bureau',
    templateUrl: './bureau.component.html',
    styleUrls: ['./bureau.component.scss']
})
export class BureauComponent implements OnInit {

    modalRef: MdbModalRef<DeleteModal>;
    public list: Bureau[] = [];
    public display: Bureau[] = [];
    currentUser: User;
    constructor(private router: Router,
                private modalService: MdbModalService,
                private bureauService: BureauService) {
    }

    ngOnInit(): void {
        this.currentUser = JSON.parse(sessionStorage.getItem('currentUser'));
        this.getBureau();
    }

    getBureau(): void {
        this.bureauService.getBureaux().subscribe(
            (response: Bureau[]) => {
                this.list = response;
                this.display =response;
            }, (error: HttpErrorResponse) => {
                alert(error.message);
            }
        );
    }


    ajouter(): void {
        this.router.navigate(['/bureau/burAdd']);
    }

    consulter(id: number): void {
        this.router.navigate(['/bureau/burCon', id]);
    }

    modifier(id: number): void {
        this.router.navigate(['/bureau/burMod', id]);
    }


    deleteModal(id: number) {
        this.modalRef = this.modalService.open(DeleteModal);
        this.modalRef.onClose.subscribe((message: any) => {
            // tslint:disable-next-line:triple-equals
            if (message == true)
                this.bureauService.deleteBureau(id).subscribe(
                    (resolve: void) => {
                        this.getBureau();
                    }
                );
        });
    }

    public search(key: string): void {
        this.display = [];
        for (const i of this.list) {
            if (i.departement.intituleDep.toLowerCase().indexOf(key.toLowerCase()) !== -1
                ||i.surface.toString().indexOf(key.toLowerCase()) !== -1
            ) {
                this.display.push(i);
            }
        }
    }
}
