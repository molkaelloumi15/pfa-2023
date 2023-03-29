import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import {FooterComponent} from './footer/footer.component';
import {NavbarComponent} from './navbar/navbar.component';
import {SidebarComponent} from './sidebar/sidebar.component';
import {DeleteModal} from './delete-modal/delete-modal.component';
import {SearchBureauModal} from './search-bureau/search-bureau-modal.component';
import {SearchDepartementModal} from './serach-departement-modal/serach-departement-modal.component';
import {SearchDirecteurModal} from './serach-directeur/search-directeur-modal.component';
import {SearchPosteModal} from './search-poste-modal/search-poste-modal.component';
import {SearchProjetModal} from './search-projet-modal/search-projet-modal.component';
import {SearchEtudeModal} from './search-etude-modal/search-etude-modal.component';

@NgModule({
    imports: [CommonModule, RouterModule, NgbModule],
    declarations: [
        FooterComponent,
        NavbarComponent,
        SidebarComponent,
        DeleteModal,
        SearchBureauModal,
        SearchDepartementModal,
        SearchDirecteurModal,
        SearchPosteModal,
        SearchProjetModal,
        SearchEtudeModal
    ],
    exports: [FooterComponent, NavbarComponent, SidebarComponent, DeleteModal]
})
export class ComponentsModule {
}
