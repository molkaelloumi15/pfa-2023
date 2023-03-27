import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {DeleteModal} from '../../components/delete-modal/delete-modal.component';
import {MdbModalRef, MdbModalService} from 'mdb-angular-ui-kit/modal';

@Component({
  selector: 'app-department',
  templateUrl: './department.component.html',
  styleUrls: ['./department.component.scss']
})
export class DepartmentComponent implements OnInit {
  modalRef: MdbModalRef<DeleteModal>;

  constructor(private router: Router, private modalService: MdbModalService) {
  }

  ngOnInit(): void {
  }

  ajouter(): void {
    this.router.navigate(['/department/depAdd']);
  }

  consulter(id: number): void {
    this.router.navigate(['/department/depCon']);
  }

  modifier(id: number): void {
    this.router.navigate(['/department/depMod']);
  }

  open() {
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
