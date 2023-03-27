import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {MdbModalRef, MdbModalService} from 'mdb-angular-ui-kit/modal';
import {DeleteModal} from '../../components/delete-modal/delete-modal.component';

@Component({
  selector: 'app-bureau',
  templateUrl: './bureau.component.html',
  styleUrls: ['./bureau.component.scss']
})
export class BureauComponent implements OnInit {

  modalRef: MdbModalRef<DeleteModal>;

  constructor(private router: Router, private modalService: MdbModalService) {
  }

  ajouter(): void {
    this.router.navigate(['/bureau/burAdd']);
  }

  consulter(id: number): void {
    this.router.navigate(['/bureau/burCon']);
  }

  modifier(id: number): void {
    this.router.navigate(['/bureau/burMod']);
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
