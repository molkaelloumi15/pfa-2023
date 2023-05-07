import {Component, OnInit} from '@angular/core';
import {MdbModalRef} from 'mdb-angular-ui-kit/modal';
import {Router} from '@angular/router';
import {Etude} from '../../Model/Etude';
import {EtudeService} from '../../Services/etude.service';
import {NgForm} from '@angular/forms';
import {AvoirEmpService} from '../../Services/avoir-emp.service';
import {AvoirEmpEtud} from '../../Model/AvoirEmpEtud';
import {Employe} from '../../Model/Employe';

@Component({
  selector: 'app-search-etude-modal',
  templateUrl: './search-etude-modal.component.html',
  styleUrls: ['./search-etude-modal.component.scss']
})
export class SearchEtudeModal implements OnInit{
  public list:Etude[] = [];
  et:Etude = {
    idEtude : 0,
    titreEtude :''
  }
  public AEE: AvoirEmpEtud= {
    etude : this.et,
    employe: null,
    salaire: 0,
    year :new Date().getFullYear()
  };
  constructor(public modalRef: MdbModalRef<SearchEtudeModal>,
              private etudeService: EtudeService ,
              private router: Router) {
  }

  ngOnInit():void {
    this.etudeService.getEtudes().subscribe(
        (response: Etude[]) => {
          this.list = response ;
        }
    );
  }

  accept(): void {
    this.modalRef.close(false)
    this.router.navigate(['etude/etudeAdd']);
  }

  close() {
    this.modalRef.close(false)
  }

  select(num: any) {
    this.etudeService.getEtudeById(num).subscribe(
        (result: Etude) => {
          this.AEE.etude = result;
        }
    );
  }

  onSubmit() {
    this.modalRef.close(this.AEE);
  }
}
