import {Component, OnInit} from '@angular/core';
import {MdbModalRef} from 'mdb-angular-ui-kit/modal';
import {Bureau} from '../../Model/Bureau';
import {BureauService} from '../../Services/bureau.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-search-bureau',
  templateUrl: './search-bureau-modal.component.html',
  styleUrls: ['./search-bureau-modal.component.scss']
})
export class SearchBureauModal implements OnInit{

  public list:Bureau[] = [];

  constructor(public modalRef: MdbModalRef<SearchBureauModal>,
              private bureauService: BureauService,
              private router: Router) {
  }

  ngOnInit():void {
    this.bureauService.getBureaux().subscribe(
        (response: Bureau[]) => {
          this.list = response ;
        }
    );
  }

  accept(): void {
    this.modalRef.close(false)
    this.router.navigate(['bureau/burAdd']);
  }

  close() {
    this.modalRef.close(false)
  }

  select(num: any) {
    this.modalRef.close(num)
  }
}
