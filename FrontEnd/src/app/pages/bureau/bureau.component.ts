import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {MdbModalRef, MdbModalService} from 'mdb-angular-ui-kit/modal';
import {DeleteModal} from '../../components/delete-modal/delete-modal.component';
import {Etude} from '../../Model/Etude';
import {HttpErrorResponse} from '@angular/common/http';
import {BureauService} from '../../Services/bureau.service';
import {Bureau} from '../../Model/Bureau';

@Component({
    selector: 'app-bureau',
    templateUrl: './bureau.component.html',
    styleUrls: ['./bureau.component.scss']
})
export class BureauComponent implements OnInit {

    modalRef: MdbModalRef<DeleteModal>;
    public list: Bureau[] = [];

    constructor(private router: Router,
                private modalService: MdbModalService,
                private bureauService: BureauService) {
    }

    ngOnInit(): void {
        this.getBureau();
    }

    getBureau(): void {
        this.bureauService.getBureaux().subscribe(
            (response: Bureau[]) => {
                this.list = response;
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
}
