import {Component, OnInit} from '@angular/core';
import {Departement} from '../../../Model/Departement';
import {ActivatedRoute, Router} from '@angular/router';
import {DepartementService} from '../../../Services/departement.service';
import {EmployeService} from '../../../Services/employe.service';
import {Etude} from '../../../Model/Etude';
import {HttpErrorResponse} from '@angular/common/http';
import {NgForm} from '@angular/forms';
import {Employe} from '../../../Model/Employe';
import {MdbModalRef, MdbModalService} from 'mdb-angular-ui-kit/modal';
import {SearchDirecteurModal} from '../../../components/serach-directeur/search-directeur-modal.component';

@Component({
    selector: 'app-dep-mod',
    templateUrl: './dep-mod.component.html',
    styleUrls: ['./dep-mod.component.scss']
})
export class DepModComponent implements OnInit {

    dir: any = 'Chercher Directeur';
    directeur: Employe;
    dept: Departement;
    modalRef: MdbModalRef<SearchDirecteurModal>;

    constructor(private route: ActivatedRoute,
                private router: Router,
                private modalService: MdbModalService,
                private deptService: DepartementService,
                private empService: EmployeService) {
    }

    ngOnInit(): void {
        this.deptService.getDepartementById(this.route.snapshot.params.id).subscribe(
            (result: Departement) => {
                this.dept = result;
                this.empService.getEmployeById(result.directeur).subscribe(
                    (response: Employe) => {
                        this.dir = response.nomEmp;
                    }, (error: HttpErrorResponse) => {
                        console.log(error);
                    }
                );
            }, (error: HttpErrorResponse) => {
                alert(error.message);
            }
        );
    }

    onSubmit(form: NgForm) {
        // @ts-ignore
        this.deptService.updateDepartement(this.dept).subscribe(
            (resonse: Departement) => {
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
                        this.dept.directeur = response.numEmp;
                        this.dir = response.nomEmp;
                    }, (error: HttpErrorResponse) => {
                        console.log(error);
                    }
                );
            }
        });
    }

}
