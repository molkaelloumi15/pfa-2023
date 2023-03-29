import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {BureauService} from '../../../Services/bureau.service';
import {Bureau} from '../../../Model/Bureau';
import {HttpErrorResponse} from '@angular/common/http';

@Component({
    selector: 'app-bur-con',
    templateUrl: './bur-con.component.html',
    styleUrls: ['./bur-con.component.scss']
})
export class BurConComponent implements OnInit {

    birou : Bureau;

    constructor(
        private route: ActivatedRoute,
        private bureauService: BureauService) {
    }

    ngOnInit(): void {
        this.bureauService.getBureauById(this.route.snapshot.params.id).subscribe(
            (result: Bureau) => {
                this.birou = result;
            }, (error: HttpErrorResponse) => {
                alert(error.message);
            }
        );
    }

}
