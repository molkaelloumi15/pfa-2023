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
import {AuthGuard} from '../../Services/auth.guard';
import {UsersComponent} from '../../pages/users/users.component';
import {MyProfileComponent} from '../../pages/users/my-profile/my-profile.component';
// import { RtlComponent } from "../../pages/rtl/rtl.component";

export const AdminLayoutRoutes: Routes = [
  { path: 'dashboard', component: DashboardComponent },
  { path: 'icons', component: IconsComponent },
  { path: 'maps', component: MapComponent },
  { path: 'notifications', component: NotificationsComponent },
  { path: 'user', component: UserComponent },
  { path: 'users', component: UsersComponent },
  { path: 'profile', component: MyProfileComponent },
  { path: 'tables', component: TablesComponent },
  { path: 'department', canActivate: [AuthGuard], component: DepartmentComponent },
  { path: 'department/depAdd', canActivate: [AuthGuard], component: DepAddComponent },
  { path: 'department/depMod/:id', canActivate: [AuthGuard], component: DepModComponent },
  { path: 'department/depCon/:id', canActivate: [AuthGuard], component: DepConComponent },
  { path: 'projet_recherche', component: ProjetComponent },
  { path: 'projet_recherche/proAdd', canActivate: [AuthGuard], component: ProAddComponent },
  { path: 'projet_recherche/proMod/:id', canActivate: [AuthGuard], component: ProModComponent },
  { path: 'projet_recherche/proCon/:id', component: ProConComponent },
  { path: 'emp', canActivate: [AuthGuard], component: EmployeeComponent },
  { path: 'emp/empAdd', canActivate: [AuthGuard], component: EmpAddComponent },
  { path: 'emp/empMod/:id', canActivate: [AuthGuard], component: EmpModComponent },
  { path: 'emp/empCon/:id', canActivate: [AuthGuard], component: EmpConComponent },
  { path: 'tel', canActivate: [AuthGuard], component: TelComponent },
  { path: 'tel/telAdd', canActivate: [AuthGuard], component: TelAddComponent },
  { path: 'tel/telMod/:id', canActivate: [AuthGuard], component: TelModComponent },
  { path: 'etude', canActivate: [AuthGuard], component: EtudesComponent },
  { path: 'etude/etudeAdd', canActivate: [AuthGuard], component: EtudAjoutComponent },
  { path: 'etude/etudeMod/:id', canActivate: [AuthGuard], component: EtudModificationComponent },
  { path: 'bureau', canActivate: [AuthGuard], component: BureauComponent },
  { path: 'bureau/burAdd', canActivate: [AuthGuard], component: BurAddComponent },
  { path: 'bureau/burMod/:id', canActivate: [AuthGuard], component: BurModComponent },
  { path: 'bureau/burCon/:id', canActivate: [AuthGuard], component: BurConComponent }
];
