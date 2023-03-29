import {Component, OnInit} from '@angular/core';
import {MdbModalRef} from 'mdb-angular-ui-kit/modal';
import {Router} from '@angular/router';
import {PosteTelephonique} from '../../Model/PosteTelephonique';
import {PosteTelephoniqueService} from '../../Services/poste-telephonique.service';

@Component({
  selector: 'app-search-poste-modal',
  templateUrl: './search-poste-modal.component.html',
  styleUrls: ['./search-poste-modal.component.scss']
})
export class SearchPosteModal implements OnInit{

  public list:PosteTelephonique[] = [];

  constructor(public modalRef: MdbModalRef<SearchPosteModal>,
              private posteTelephoniqueService: PosteTelephoniqueService ,
              private router: Router) {
  }

  ngOnInit():void {
    this.posteTelephoniqueService.getPosteTelephoniques().subscribe(
        (response: PosteTelephonique[]) => {
          this.list = response ;
        }
    );
  }

  accept(): void {
    this.modalRef.close(false)
    this.router.navigate(['tel/telAdd']);
  }

  close() {
    this.modalRef.close(false)
  }

  select(num: any) {
    this.modalRef.close(num)
  }
}
