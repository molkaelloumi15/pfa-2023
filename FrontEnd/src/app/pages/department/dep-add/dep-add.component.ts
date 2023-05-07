import {Component, OnInit} from '@angular/core';
import {Departement} from '../../../Model/Departement';
import {MdbModalRef, MdbModalService} from 'mdb-angular-ui-kit/modal';
import {Router} from '@angular/router';
import {DepartementService} from '../../../Services/departement.service';
import {NgForm} from '@angular/forms';
import {HttpErrorResponse} from '@angular/common/http';
import {Employe} from '../../../Model/Employe';
import {EmployeService} from '../../../Services/employe.service';
import {SearchDirecteurModal} from '../../../components/serach-directeur/search-directeur-modal.component';

@Component({
    selector: 'app-dep-add',
    templateUrl: './dep-add.component.html',
    styleUrls: ['./dep-add.component.scss']
})
export class DepAddComponent implements OnInit {

    dir: any = 'Chercher Directeur';
    direc = 1 ;
    directeur: Employe;
    modalRef: MdbModalRef<SearchDirecteurModal>;

    constructor(private router: Router,
                private modalService: MdbModalService,
                private depService: DepartementService,
                private empService: EmployeService) {
    }

    ngOnInit(): void {
    }

    onSubmit(form: NgForm) {
        const dep = {
            intituleDep: form.value.intitule,
            budgetDep: form.value.budget,
            directeur: this.direc
        };
        // @ts-ignore
        this.depService.addDepartement(dep).subscribe(
            (resonse: Departement) => {
                console.log(resonse);
                this.router.navigate(['department']);
            }, (error: any) => {
                console.log(error.messge);
            }
        );
    }

    searchDirect() {
        this.modalRef = this.modalService.open(SearchDirecteurModal);
        this.modalRef.onClose.subscribe((message: any) => {
            // tslint:disable-next-line:triple-equals
            if (message != false) {
                this.empService.getEmployeById(message).subscribe(
                    (response: Employe) => {
                        this.directeur = response;
                        this.direc = response.numEmp;
                        this.dir = response.nomEmp;
                    }, (error: HttpErrorResponse) => {
                        console.log(error);
                    }
                );
            }
        });
    }
}
