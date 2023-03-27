import { Component } from '@angular/core';
import { MdbModalRef } from 'mdb-angular-ui-kit/modal';

@Component({
  selector: 'app-delete-modal',
  templateUrl: './delete-modal.component.html',
  styleUrls: ['./delete-modal.component.scss']
})
export class DeleteModal {
  constructor(public modalRef: MdbModalRef<DeleteModal>) {
  }
  accept(): void {
    const closeMessage = true;
    this.modalRef.close(closeMessage)
  }

  close() {
    const closeMessage = false;
    this.modalRef.close(closeMessage)
  }
}
