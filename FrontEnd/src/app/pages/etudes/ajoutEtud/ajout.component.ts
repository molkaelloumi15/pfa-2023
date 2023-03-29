import {Component, OnInit} from '@angular/core';
import {EtudeService} from '../../../Services/etude.service';
import {NgForm} from '@angular/forms';
import {Etude} from '../../../Model/Etude';
import {Router} from '@angular/router';

@Component({
    selector: 'app-ajoutEtud',
    templateUrl: './ajout.component.html',
    styleUrls: ['./ajout.component.scss']
})
export class EtudAjoutComponent implements OnInit {


    constructor(private router: Router,
                private etudService: EtudeService) {
    }

    ngOnInit(): void {
    }

    onSubmit(form: NgForm){
        const etude = {
            titreEtude: form.value.titre
        };
        // @ts-ignore
        this.etudService.addEtude(etude).subscribe(
            (resonse : Etude) => {
                console.log(resonse);
                this.router.navigate(['etude']);
            } , (error : any) => {
                console.log(error.messge);
            }
        );
    }

}
