import {NgModule} from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import {RouterModule} from '@angular/router';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';

import {AdminLayoutRoutes} from './admin-layout.routing';
import {DashboardComponent} from '../../pages/dashboard/dashboard.component';
import {IconsComponent} from '../../pages/icons/icons.component';
import {MapComponent} from '../../pages/map/map.component';
import {NotificationsComponent} from '../../pages/notifications/notifications.component';
import {UserComponent} from '../../pages/user/user.component';
import {TablesComponent} from '../../pages/tables/tables.component';
import {TypographyComponent} from '../../pages/typography/typography.component';
// import { RtlComponent } from "../../pages/rtl/rtl.component";

import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {DepartmentComponent} from '../../pages/department/department.component';
import {EtudesComponent} from '../../pages/etudes/etudes.component';
import {TelComponent} from '../../pages/tel/tel.component';
import {ProjetComponent} from '../../pages/projet/projet.component';
import {BureauComponent} from '../../pages/bureau/bureau.component';
import {EmployeeComponent} from '../../pages/employee/employee.component';
import {EtudAjoutComponent} from '../../pages/etudes/ajoutEtud/ajout.component';
import {EtudModificationComponent} from '../../pages/etudes/modificationEtud/modification.component';
import {EmpAddComponent} from '../../pages/employee/emp-add/emp-add.component';
import {EmpModComponent} from '../../pages/employee/emp-mod/emp-mod.component';
import {EmpConComponent} from '../../pages/employee/emp-con/emp-con.component';
import {DepAddComponent} from '../../pages/department/dep-add/dep-add.component';
import {DepModComponent} from '../../pages/department/dep-mod/dep-mod.component';
import {DepConComponent} from '../../pages/department/dep-con/dep-con.component';
import {BurAddComponent} from '../../pages/bureau/bur-add/bur-add.component';
import {BurModComponent} from '../../pages/bureau/bur-mod/bur-mod.component';
import {BurConComponent} from '../../pages/bureau/bur-con/bur-con.component';
import {ProAddComponent} from '../../pages/projet/pro-add/pro-add.component';
import {ProModComponent} from '../../pages/projet/pro-mod/pro-mod.component';
import {ProConComponent} from '../../pages/projet/pro-con/pro-con.component';
import {TelAddComponent} from '../../pages/tel/tel-add/tel-add.component';
import {TelModComponent} from '../../pages/tel/tel-mod/tel-mod.component';
import {ComponentsModule} from '../../components/components.module';
import {UsersComponent} from '../../pages/users/users.component';
import {MyProfileComponent} from '../../pages/users/my-profile/my-profile.component';

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild(AdminLayoutRoutes),
        FormsModule,
        HttpClientModule,
        NgbModule,
        ComponentsModule,
    ],
    declarations: [
        DashboardComponent,
        UserComponent,
        TablesComponent,
        IconsComponent,
        TypographyComponent,
        NotificationsComponent,
        MapComponent,
        DepartmentComponent,
        EtudesComponent,
        TelComponent,
        ProjetComponent,
        BureauComponent,
        EmployeeComponent,
        EtudAjoutComponent,
        EtudModificationComponent,
        EmpAddComponent,
        EmpModComponent,
        EmpConComponent,
        DepAddComponent,
        DepModComponent,
        DepConComponent,
        BurAddComponent,
        BurModComponent,
        BurConComponent,
        ProAddComponent,
        ProModComponent,
        ProConComponent,
        TelAddComponent,
        TelModComponent,
        UsersComponent,
        MyProfileComponent
    ]
})
export class AdminLayoutModule {
}
