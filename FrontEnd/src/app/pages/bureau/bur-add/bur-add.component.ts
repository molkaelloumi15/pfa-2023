import {Component, OnInit} from '@angular/core';
import {Departement} from '../../../Model/Departement';
import {MdbModalRef, MdbModalService} from 'mdb-angular-ui-kit/modal';
import {Router} from '@angular/router';
import {DepartementService} from '../../../Services/departement.service';
import {BureauService} from '../../../Services/bureau.service';
import {NgForm} from '@angular/forms';
import {Bureau} from '../../../Model/Bureau';
import {HttpErrorResponse} from '@angular/common/http';
import {SearchDepartementModal} from '../../../components/serach-departement-modal/serach-departement-modal.component';

@Component({
  selector: 'app-bur-add',
  templateUrl: './bur-add.component.html',
  styleUrls: ['./bur-add.component.scss']
})
export class BurAddComponent implements OnInit{

  dep: any = 'Chercher Départment';
  departement: Departement ;
  modalRef: MdbModalRef<SearchDepartementModal>;

  constructor(private router: Router,
              private modalService: MdbModalService,
              private depService: DepartementService,
              private burService: BureauService) {
  }

  ngOnInit():void {
  }

  onSubmit(form: NgForm) {
    const bur = {
      surface: form.value.surface,
      departement: this.departement
    };
    // @ts-ignore
    this.burService.addBureau(bur).subscribe(
        (resonse: Bureau) => {
          console.log(resonse);
          this.router.navigate(['bureau']);
        }, (error: any) => {
          console.log(error.messge);
        }
    );
  }

  searchDepart() {
    this.modalRef = this.modalService.open(SearchDepartementModal);
    this.modalRef.onClose.subscribe((message: any) => {
      // tslint:disable-next-line:triple-equals
      if (message != false) {
        this.depService.getDepartementById(message).subscribe(
            (response: Departement) => {
              this.departement = response;
              this.dep = 'Departement '+response.intituleDep;
            }, (error: HttpErrorResponse) => {
              console.log(error);
            }
        );
      }
    });
  }
}
