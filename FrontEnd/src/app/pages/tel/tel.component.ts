import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {MdbModalRef, MdbModalService} from 'mdb-angular-ui-kit/modal';
import {DeleteModal} from '../../components/delete-modal/delete-modal.component';
import {PosteTelephonique} from '../../Model/PosteTelephonique';
import {PosteTelephoniqueService} from '../../Services/poste-telephonique.service';
import {HttpErrorResponse} from '@angular/common/http';
import {User} from '../../Model/User';

@Component({
  selector: 'app-tel',
  templateUrl: './tel.component.html',
  styleUrls: ['./tel.component.scss']
})
export class TelComponent implements OnInit{

  modalRef: MdbModalRef<DeleteModal>;
  public list: PosteTelephonique[] = [];
  public display: PosteTelephonique[] = [];
  currentUser: User;
  constructor(private router: Router,
              private modalService: MdbModalService,
              private telService: PosteTelephoniqueService) {
  }

  ngOnInit(): void {
    this.currentUser = JSON.parse(sessionStorage.getItem('currentUser'));
    this.getTel();
  }

  getTel(): void {
    this.telService.getPosteTelephoniques().subscribe(
        (response: PosteTelephonique[]) => {
          this.list = response;
          this.display =response;
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

  public search(key: string): void {
    this.display = [];
    for (const i of this.list) {
      if (i.numeroAppel.toString().indexOf(key.toLowerCase()) !== -1
          || i.bureau.departement.intituleDep.toLowerCase().indexOf(key.toLowerCase()) !== -1
          || i.bureau.surface.toString().indexOf(key.toLowerCase()) !== -1
      ) {
        this.display.push(i);
      }
    }
  }

}
