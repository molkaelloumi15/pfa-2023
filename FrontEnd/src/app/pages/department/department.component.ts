import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {DeleteModal} from '../../components/delete-modal/delete-modal.component';
import {MdbModalRef, MdbModalService} from 'mdb-angular-ui-kit/modal';
import {Departement} from '../../Model/Departement';
import {DepartementService} from '../../Services/departement.service';
import {HttpErrorResponse} from '@angular/common/http';
import {User} from '../../Model/User';

@Component({
  selector: 'app-department',
  templateUrl: './department.component.html',
  styleUrls: ['./department.component.scss']
})
export class DepartmentComponent implements OnInit {
  modalRef: MdbModalRef<DeleteModal>;
  public list: Departement[] = [];
  public display: Departement[] = [];
  currentUser: User;
  constructor(private router: Router,
              private modalService: MdbModalService,
              private deparService: DepartementService) {
  }

  ngOnInit(): void {
    this.currentUser = JSON.parse(sessionStorage.getItem('currentUser'));
    this.getDept();
  }

  getDept():void{
    this.deparService.getDepartements().subscribe(
        (response: Departement[]) => {
          this.list = response;
          this.display =response;
        }, (error: HttpErrorResponse) => {
          alert(error.message);
        }
    );
  }

  ajouter(): void {
    this.router.navigate(['/department/depAdd']);
  }

  consulter(id: number): void {
    this.router.navigate(['/department/depCon',id]);
  }

  modifier(id: number): void {
    this.router.navigate(['/department/depMod',id]);
  }

  deleteModal(id : number) {
    this.modalRef = this.modalService.open(DeleteModal);
    this.modalRef.onClose.subscribe((message: any) => {
      // tslint:disable-next-line:triple-equals
      if (message == true)
        this.deparService.deleteDepartement(id).subscribe(
            (resolve: void) => {
              this.getDept();
            }
        );
    });
  }

  public search(key: string): void {
    this.display = [];
    for (const i of this.list) {
      if (i.intituleDep.toLowerCase().indexOf(key.toLowerCase()) !== -1
          ||i.budgetDep.toString().toLowerCase().indexOf(key.toLowerCase()) !== -1
      ) {
        this.display.push(i);
      }
    }
  }

}
