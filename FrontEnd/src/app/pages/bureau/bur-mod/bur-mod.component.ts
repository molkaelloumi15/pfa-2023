import {Component, OnInit} from '@angular/core';
import {Bureau} from '../../../Model/Bureau';
import {ActivatedRoute, Route, Router} from '@angular/router';
import {BureauService} from '../../../Services/bureau.service';
import {DepartementService} from '../../../Services/departement.service';
import {HttpErrorResponse} from '@angular/common/http';
import {NgForm} from '@angular/forms';
import {Etude} from '../../../Model/Etude';
import {SearchDepartementModal} from '../../../components/serach-departement-modal/serach-departement-modal.component';
import {Departement} from '../../../Model/Departement';
import {MdbModalRef, MdbModalService} from 'mdb-angular-ui-kit/modal';

@Component({
    selector: 'app-bur-mod',
    templateUrl: './bur-mod.component.html',
    styleUrls: ['./bur-mod.component.scss']
})
export class BurModComponent implements OnInit {

    dep: any = 'Chercher Départment';
    birou: Bureau;
    modalRef: MdbModalRef<SearchDepartementModal>;

    constructor(private route: ActivatedRoute,
                private router: Router,
                private bureauService: BureauService,
                private depService: DepartementService,
                private modalService: MdbModalService) {
    }

    ngOnInit(): void {
        this.bureauService.getBureauById(this.route.snapshot.params.id).subscribe(
            (result: Bureau) => {
                this.birou = result;
                this.dep = 'Departement ' + result.departement.intituleDep;
            }, (error: HttpErrorResponse) => {
                alert(error.message);
            }
        );
    }

    onSubmit(form: NgForm) {
        // @ts-ignore
        this.bureauService.updateBureau(this.birou).subscribe(
            (resonse: Bureau) => {
                this.router.navigate(['bureau']);
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
                        this.birou.departement = response;
                        this.dep = 'Departement ' + response.intituleDep;
                    }, (error: HttpErrorResponse) => {
                        console.log(error);
                    }
                );
            }
        });
    }

}
