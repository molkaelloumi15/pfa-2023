import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {DeleteModal} from '../../components/delete-modal/delete-modal.component';
import {MdbModalRef, MdbModalService} from 'mdb-angular-ui-kit/modal';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.scss']
})
export class EmployeeComponent implements OnInit {

  modalRef: MdbModalRef<DeleteModal>;

  constructor(private router: Router, private modalService: MdbModalService) {
  }
  ajouter(): void {
    this.router.navigate(['/emp/empAdd']);
  }

  consulter(id: number): void {
    this.router.navigate(['/emp/empCon']);
  }

  modifier(id: number): void {
    this.router.navigate(['/emp/empMod']);
  }

  ngOnInit(): void {
  }

  deleteModal() {
    this.modalRef = this.modalService.open(DeleteModal);
    this.modalRef.onClose.subscribe((message: any) => {
      // tslint:disable-next-line:triple-equals
      if (message == true)
        alert(message);
    });
  }

}
