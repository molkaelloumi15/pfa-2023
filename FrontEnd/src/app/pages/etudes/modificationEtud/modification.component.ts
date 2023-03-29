import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {Etude} from '../../../Model/Etude';
import {EtudeService} from '../../../Services/etude.service';
import {HttpErrorResponse} from '@angular/common/http';
import {NgForm} from '@angular/forms';

@Component({
    selector: 'app-modificationEtud',
    templateUrl: './modification.component.html',
    styleUrls: ['./modification.component.scss']
})
export class EtudModificationComponent implements OnInit {


    etude: Etude;

    constructor(private route: ActivatedRoute,
                private router: Router,
                private etudeService: EtudeService) {
    }

    ngOnInit(): void {
        this.etudeService.getEtudeById(this.route.snapshot.params.id).subscribe(
            (result :Etude) => {
                this.etude = result;
                console.log(this.etude);
            },(error : HttpErrorResponse) => {
                alert(error.message);
            }
        );
    }

    onSubmit(form: NgForm) {
        // @ts-ignore
        this.etudeService.updateEtude(this.etude).subscribe(
            (resonse : Etude) => {
                console.log(resonse);
                this.router.navigate(['etude']);
            } , (error : any) => {
                console.log(error.messge);
            }
        );
    }
}
