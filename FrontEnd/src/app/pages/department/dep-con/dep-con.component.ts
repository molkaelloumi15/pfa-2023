import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {HttpErrorResponse} from '@angular/common/http';
import {Departement} from '../../../Model/Departement';
import {DepartementService} from '../../../Services/departement.service';
import {EmployeService} from '../../../Services/employe.service';
import {Employe} from '../../../Model/Employe';

@Component({
  selector: 'app-dep-con',
  templateUrl: './dep-con.component.html',
  styleUrls: ['./dep-con.component.scss']
})
export class DepConComponent implements OnInit{

  depart : Departement;
  director : Employe ;
  constructor(
      private route: ActivatedRoute,
      private depService: DepartementService,
      private empService: EmployeService) {
  }

  ngOnInit(): void {
    this.depService.getDepartementById(this.route.snapshot.params.id).subscribe(
        (result: Departement) => {
          this.depart = result;
          this.empService.getEmployeById(result.directeur).subscribe(
              (resultt :Employe) => {
                  this.director = resultt;
              }, (error : HttpErrorResponse) => {
                  alert('Director Problem'+error.message);
            }
          );
        }, (error: HttpErrorResponse) => {
          alert(error.message);
        }
    );
  }
}
