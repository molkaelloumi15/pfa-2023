import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {HttpErrorResponse} from '@angular/common/http';
import {ProjetRecherche} from '../../../Model/ProjetRecherche';
import {ProjetRechercheService} from '../../../Services/projet-recherche.service';

@Component({
  selector: 'app-pro-con',
  templateUrl: './pro-con.component.html',
  styleUrls: ['./pro-con.component.scss']
})
export class ProConComponent implements OnInit{

  project : ProjetRecherche;

  constructor(
      private route: ActivatedRoute,
      private projetRechercheService: ProjetRechercheService) {
  }

  ngOnInit(): void {
    this.projetRechercheService.getProjetRechercheById(this.route.snapshot.params.id).subscribe(
        (result: ProjetRecherche) => {
          this.project = result;
        }, (error: HttpErrorResponse) => {
          alert(error.message);
        }
    );
  }

}
