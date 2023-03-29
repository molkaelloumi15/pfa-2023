import {Component, OnInit} from '@angular/core';
import {NgForm} from '@angular/forms';
import {Router} from '@angular/router';
import {PosteTelephoniqueService} from '../../../Services/poste-telephonique.service';
import {PosteTelephonique} from '../../../Model/PosteTelephonique';
import {MdbModalRef, MdbModalService} from 'mdb-angular-ui-kit/modal';
import {SearchBureauModal} from '../../../components/search-bureau/search-bureau-modal.component';
import {BureauService} from '../../../Services/bureau.service';
import {Bureau} from '../../../Model/Bureau';
import {HttpErrorResponse} from '@angular/common/http';

@Component({
    selector: 'app-tel-add',
    templateUrl: './tel-add.component.html',
    styleUrls: ['./tel-add.component.scss']
})
export class TelAddComponent implements OnInit {


    bur: any = 'Chercher Un Bureau';
    bureau : Bureau ;
    modalRef: MdbModalRef<SearchBureauModal>;

    constructor(private router: Router,
                private modalService: MdbModalService,
                private bureaService: BureauService,
                private telService: PosteTelephoniqueService) {
    }

    ngOnInit(): void {
    }

    onSubmit(form: NgForm) {
        const tel: PosteTelephonique = {
            numeroAppel: form.value.tel,
            bureau: this.bureau
        };
        // @ts-ignore
        this.telService.addPosteTelephonique(tel).subscribe(
            (resonse: PosteTelephonique) => {
                console.log(resonse);
                this.router.navigate(['tel']);
            }, (error: any) => {
                console.log(error.messge);
            }
        );
    }

    searchBureau() {
        this.modalRef = this.modalService.open(SearchBureauModal);
        this.modalRef.onClose.subscribe((message: any) => {
            // tslint:disable-next-line:triple-equals
            if (message != false) {
                this.bureaService.getBureauById(message).subscribe(
                    (response: Bureau) => {
                        this.bureau = response;
                        this.bur = 'Bureau N°'+response.numBureau+' '+response.surface+'(m²)';
                    }, (error: HttpErrorResponse) => {
                        console.log(error);
                    }
                );
            }
        });
    }
}
