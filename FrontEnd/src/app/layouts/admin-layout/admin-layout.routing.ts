import { Routes } from '@angular/router';

import { DashboardComponent } from '../../pages/dashboard/dashboard.component';
import { IconsComponent } from '../../pages/icons/icons.component';
import { MapComponent } from '../../pages/map/map.component';
import { NotificationsComponent } from '../../pages/notifications/notifications.component';
import { UserComponent } from '../../pages/user/user.component';
import { TablesComponent } from '../../pages/tables/tables.component';
import { TypographyComponent } from '../../pages/typography/typography.component';
import {BureauComponent} from '../../pages/bureau/bureau.component';
import {DepartmentComponent} from '../../pages/department/department.component';
import {ProjetComponent} from '../../pages/projet/projet.component';
import {EmployeeComponent} from '../../pages/employee/employee.component';
import {TelComponent} from '../../pages/tel/tel.component';
import {EtudesComponent} from '../../pages/etudes/etudes.component';
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
import {TelAddComponent} from '../../pages/tel/tel-add/tel-add.component';
import {TelModComponent} from '../../pages/tel/tel-mod/tel-mod.component';
import {ProAddComponent} from '../../pages/projet/pro-add/pro-add.component';
import {ProModComponent} from '../../pages/projet/pro-mod/pro-mod.component';
import {ProConComponent} from '../../pages/projet/pro-con/pro-con.component';
// import { RtlComponent } from "../../pages/rtl/rtl.component";

export const AdminLayoutRoutes: Routes = [
  { path: 'dashboard', component: DashboardComponent },
  { path: 'icons', component: IconsComponent },
  { path: 'maps', component: MapComponent },
  { path: 'notifications', component: NotificationsComponent },
  { path: 'user', component: UserComponent },
  { path: 'tables', component: TablesComponent },
  { path: 'department', component: DepartmentComponent },
  { path: 'department/depAdd', component: DepAddComponent },
  { path: 'department/depMod/:id', component: DepModComponent },
  { path: 'department/depCon/:id', component: DepConComponent },
  { path: 'projet_recherche', component: ProjetComponent },
  { path: 'projet_recherche/proAdd', component: ProAddComponent },
  { path: 'projet_recherche/proMod/:id', component: ProModComponent },
  { path: 'projet_recherche/proCon/:id', component: ProConComponent },
  { path: 'emp', component: EmployeeComponent },
  { path: 'emp/empAdd', component: EmpAddComponent },
  { path: 'emp/empMod/:id', component: EmpModComponent },
  { path: 'emp/empCon/:id', component: EmpConComponent },
  { path: 'tel', component: TelComponent },
  { path: 'tel/telAdd', component: TelAddComponent },
  { path: 'tel/telMod/:id', component: TelModComponent },
  { path: 'etude', component: EtudesComponent },
  { path: 'etude/etudeAdd', component: EtudAjoutComponent },
  { path: 'etude/etudeMod/:id', component: EtudModificationComponent },
  { path: 'bureau', component: BureauComponent },
  { path: 'bureau/burAdd', component: BurAddComponent },
  { path: 'bureau/burMod/:id', component: BurModComponent },
  { path: 'bureau/burCon/:id', component: BurConComponent }
];
