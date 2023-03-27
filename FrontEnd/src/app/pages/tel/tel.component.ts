import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {MdbModalRef, MdbModalService} from 'mdb-angular-ui-kit/modal';
import {DeleteModal} from '../../components/delete-modal/delete-modal.component';

@Component({
  selector: 'app-tel',
  templateUrl: './tel.component.html',
  styleUrls: ['./tel.component.scss']
})
export class TelComponent implements OnInit{

  modalRef: MdbModalRef<DeleteModal>;

  constructor(private router: Router, private modalService: MdbModalService) {
  }
  ajouter(): void {
    this.router.navigate(['/tel/telAdd']);
  }

  modifier(id: number): void {
    this.router.navigate(['/tel/telMod']);
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
