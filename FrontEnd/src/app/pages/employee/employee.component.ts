import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {DeleteModal} from '../../components/delete-modal/delete-modal.component';
import {MdbModalRef, MdbModalService} from 'mdb-angular-ui-kit/modal';
import {Employe} from '../../Model/Employe';
import {EmployeService} from '../../Services/employe.service';
import {HttpErrorResponse} from '@angular/common/http';

@Component({
    selector: 'app-employee',
    templateUrl: './employee.component.html',
    styleUrls: ['./employee.component.scss']
})
export class EmployeeComponent implements OnInit {

    modalRef: MdbModalRef<DeleteModal>;
    public list: Employe[] = [];
    public display: Employe[] = [];

    constructor(private router: Router,
                private modalService: MdbModalService,
                private employeService: EmployeService) {
    }

    ngOnInit(): void {
        this.getEmployes();
    }

    getEmployes(): void {
        this.employeService.getEmployes().subscribe(
            (response: Employe[]) => {
                this.list = response;
                this.display =response;
            }, (error: HttpErrorResponse) => {
                alert(error.message);
            }
        );
    }

    ajouter(): void {
        this.router.navigate(['/emp/empAdd']);
    }

    consulter(id: number): void {
        this.router.navigate(['/emp/empCon',id]);
    }

    modifier(id: number): void {
        this.router.navigate(['/emp/empMod',id]);
    }


    deleteModal(id: number) {
        this.modalRef = this.modalService.open(DeleteModal);
        this.modalRef.onClose.subscribe((message: any) => {
            // tslint:disable-next-line:triple-equals
            if (message == true)
                this.employeService.deleteEmploye(id).subscribe(
                    (resolve: void) => {
                        this.getEmployes();
                    }
                );
        });
    }

    public search(key: string): void {
        this.display = [];
        for (const i of this.list) {
            if (i.nomEmp.toLowerCase().indexOf(key.toLowerCase()) !== -1
                ||i.fonctionEmp.toLowerCase().indexOf(key.toLowerCase()) !== -1
                ||i.posteTelephonique.numeroAppel.toString().indexOf(key.toLowerCase()) !== -1
            ) {
                this.display.push(i);
            }
        }
    }

}
