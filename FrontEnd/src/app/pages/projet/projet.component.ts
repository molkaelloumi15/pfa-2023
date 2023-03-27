import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {DeleteModal} from '../../components/delete-modal/delete-modal.component';
import {MdbModalRef, MdbModalService} from 'mdb-angular-ui-kit/modal';

@Component({
  selector: 'app-projet',
  templateUrl: './projet.component.html',
  styleUrls: ['./projet.component.scss']
})
export class ProjetComponent implements OnInit {

  modalRef: MdbModalRef<DeleteModal>;

  constructor(private router: Router, private modalService: MdbModalService) {
  }

  ajouter(): void {
    this.router.navigate(['/projet_recherche/proAdd']);
  }

  consulter(id: number): void {
    this.router.navigate(['/projet_recherche/proCon']);
  }

  modifier(id: number): void {
    this.router.navigate(['/projet_recherche/proMod']);
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
