import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {HttpErrorResponse} from '@angular/common/http';
import {Employe} from '../../../Model/Employe';
import {EmployeService} from '../../../Services/employe.service';
import {AvoirEmpService} from '../../../Services/avoir-emp.service';
import {AvoirEmpEtud} from '../../../Model/AvoirEmpEtud';

@Component({
  selector: 'app-emp-con',
  templateUrl: './emp-con.component.html',
  styleUrls: ['./emp-con.component.scss']
})
export class EmpConComponent implements OnInit{

  employer : Employe;
  etudes : AvoirEmpEtud[] = [];

  constructor(
      private route: ActivatedRoute,
      private empService: EmployeService,
      private empEtudService: AvoirEmpService) {
  }

  ngOnInit(): void {
    this.empService.getEmployeById(this.route.snapshot.params.id).subscribe(
        (result: Employe) => {
          this.employer = result;
          this.empEtudService.getAllAvoirEmpEtudsByEmp(result.numEmp).subscribe(
              (resultt : AvoirEmpEtud[]) => {
                  for (const i of resultt){
                      this.etudes.push(i);
                  }
              }
          );
        }, (error: HttpErrorResponse) => {
          alert(error.message);
        }
    );
  }
}
