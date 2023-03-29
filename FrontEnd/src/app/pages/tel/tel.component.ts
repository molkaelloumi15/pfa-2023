import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {MdbModalRef, MdbModalService} from 'mdb-angular-ui-kit/modal';
import {DeleteModal} from '../../components/delete-modal/delete-modal.component';
import {PosteTelephonique} from '../../Model/PosteTelephonique';
import {PosteTelephoniqueService} from '../../Services/poste-telephonique.service';
import {Etude} from '../../Model/Etude';
import {HttpErrorResponse} from '@angular/common/http';

@Component({
  selector: 'app-tel',
  templateUrl: './tel.component.html',
  styleUrls: ['./tel.component.scss']
})
export class TelComponent implements OnInit{

  modalRef: MdbModalRef<DeleteModal>;
  public list: PosteTelephonique[] = [];

  constructor(private router: Router,
              private modalService: MdbModalService,
              private telService: PosteTelephoniqueService) {
  }

  ngOnInit(): void {
    this.getTel();
  }

  getTel(): void {
    this.telService.getPosteTelephoniques().subscribe(
        (response: PosteTelephonique[]) => {
          this.list = response;
        }, (error: HttpErrorResponse) => {
          alert(error.message);
        }
    );
  }

  ajouter(): void {
    this.router.navigate(['/tel/telAdd']);
  }

  modifier(id: number): void {
    this.router.navigate(['/tel/telMod',id]);
  }


  deleteModal(id : number) {
    this.modalRef = this.modalService.open(DeleteModal);
    this.modalRef.onClose.subscribe((message: any) => {
      // tslint:disable-next-line:triple-equals
      if (message == true)
        this.telService.deletePosteTelephonique(id).subscribe(
            (resolve: void) => {
              this.getTel();
            }
        );
    });
  }

}
