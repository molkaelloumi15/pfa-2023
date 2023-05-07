import {Component, OnInit} from '@angular/core';
import {MdbModalRef} from 'mdb-angular-ui-kit/modal';
import {Router} from '@angular/router';
import {Departement} from '../../Model/Departement';
import {DepartementService} from '../../Services/departement.service';

@Component({
  selector: 'app-serach-departement-modal',
  templateUrl: './serach-departement-modal.component.html',
  styleUrls: ['./serach-departement-modal.component.scss']
})
export class SearchDepartementModal implements OnInit{

  public list:Departement[] = [];

  constructor(public modalRef: MdbModalRef<SearchDepartementModal>,
              private depService: DepartementService,
              private router: Router) {
  }

  ngOnInit():void {
    this.depService.getDepartements().subscribe(
        (response: Departement[]) => {
          this.list = response ;
        }
    );
  }

  accept(): void {
    this.modalRef.close(false)
    this.router.navigate(['department/depAdd']);
  }

  close() {
    this.modalRef.close(false)
  }

  select(num: any) {
    this.modalRef.close(num)
  }
}
