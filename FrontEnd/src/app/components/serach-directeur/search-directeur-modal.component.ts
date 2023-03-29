import {Component, OnInit} from '@angular/core';
import {MdbModalRef} from 'mdb-angular-ui-kit/modal';
import {Router} from '@angular/router';
import {Employe} from '../../Model/Employe';
import {EmployeService} from '../../Services/employe.service';

@Component({
  selector: 'app-serach-directeur',
  templateUrl: './search-directeur-modal.component.html',
  styleUrls: ['./search-directeur-modal.component.scss']
})
export class SearchDirecteurModal implements OnInit{

  public list:Employe[] = [];

  constructor(public modalRef: MdbModalRef<SearchDirecteurModal>,
              private employeService: EmployeService,
              private router: Router) {
  }

  ngOnInit():void {
    this.employeService.getEmployes().subscribe(
        (response: Employe[]) => {
          this.list = response ;
        }
    );
  }

  accept(): void {
    this.modalRef.close(false)
    this.router.navigate(['emp/empAdd']);
  }

  close() {
    this.modalRef.close(false)
  }

  select(num: any) {
    this.modalRef.close(num)
  }
}
