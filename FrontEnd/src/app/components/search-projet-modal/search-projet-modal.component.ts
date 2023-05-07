import {Component, OnInit} from '@angular/core';
import {MdbModalRef} from 'mdb-angular-ui-kit/modal';
import {Router} from '@angular/router';
import {ProjetRecherche} from '../../Model/ProjetRecherche';
import {ProjetRechercheService} from '../../Services/projet-recherche.service';

@Component({
  selector: 'app-search-projet-modal',
  templateUrl: './search-projet-modal.component.html',
  styleUrls: ['./search-projet-modal.component.scss']
})
export class SearchProjetModal implements OnInit{
  public list:ProjetRecherche[] = [];

  constructor(public modalRef: MdbModalRef<SearchProjetModal>,
              private projetService: ProjetRechercheService ,
              private router: Router) {
  }

  ngOnInit():void {
    this.projetService.getProjetRecherches().subscribe(
        (response: ProjetRecherche[]) => {
          this.list = response ;
        }
    );
  }

  accept(): void {
    this.modalRef.close(false)
    this.router.navigate(['projet_recherche/proAdd']);
  }

  close() {
    this.modalRef.close(false)
  }

  select(num: any) {
    this.modalRef.close(num)
  }
}
