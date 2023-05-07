import {Component, OnInit} from '@angular/core';
import {PosteTelephonique} from '../../../Model/PosteTelephonique';
import {ActivatedRoute, Router} from '@angular/router';
import {PosteTelephoniqueService} from '../../../Services/poste-telephonique.service';
import {HttpErrorResponse} from '@angular/common/http';
import {NgForm} from '@angular/forms';
import {Etude} from '../../../Model/Etude';
import {Bureau} from '../../../Model/Bureau';
import {MdbModalRef, MdbModalService} from 'mdb-angular-ui-kit/modal';
import {SearchBureauModal} from '../../../components/search-bureau/search-bureau-modal.component';
import {BureauService} from '../../../Services/bureau.service';

@Component({
    selector: 'app-tel-mod',
    templateUrl: './tel-mod.component.html',
    styleUrls: ['./tel-mod.component.scss']
})
export class TelModComponent implements OnInit {

    poste: PosteTelephonique;
    bur: any = 'Chercher Un Bureau';
    modalRef: MdbModalRef<SearchBureauModal>;
    constructor(private route: ActivatedRoute,
                private modalService: MdbModalService,
                private router: Router,
                private bureaService: BureauService,
                private telService: PosteTelephoniqueService) {
    }

    ngOnInit(): void {
        this.telService.getPosteTelephoniqueById(this.route.snapshot.params.id).subscribe(
            (result: PosteTelephonique) => {
                this.poste = result;
                this.bur = 'Bureau N°'+this.poste.bureau.numBureau+' '+result.bureau.surface+'(m²)';
            }, (error: HttpErrorResponse) => {
                alert(error.message);
            }
        );
    }

    onSubmit(form: NgForm) {
        // @ts-ignore
        this.telService.updatePosteTelephonique(this.poste).subscribe(
            (resonse : PosteTelephonique) => {
                this.router.navigate(['tel']);
            } , (error : any) => {
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
                        this.poste.bureau = response;
                        this.bur = 'Bureau N°'+response.numBureau+' '+response.surface+'(m²)';
                    }, (error: HttpErrorResponse) => {
                        console.log(error);
                    }
                );
            }
        });
    }

}
