import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';

declare interface RouteInfo {
  path: string;
  title: string;
  rtlTitle: string;
  icon: string;
  class: string;
}

export const ROUTES: RouteInfo[] = [
  {
    path: '/dashboard',
    title: 'Tableau De Bord',
    rtlTitle: 'لوحة القيادة',
    icon: 'icon-chart-pie-36',
    class: ''
  },
  {
    path: '/projet_recherche',
    title: 'Projet De Recherche',
    rtlTitle: 'Searching Project',
    icon: 'icon-components',
    class: ''
  },
  {
    path: '/department',
    title: 'département',
    rtlTitle: 'Department',
    icon: 'icon-badge',
    class: ''
  },
  {
    path: '/emp',
    title: 'employés',
    rtlTitle: 'Employers',
    icon: 'icon-single-02',
    class: ''
  },
  {
    path: '/bureau',
    title: 'Bureau',
    rtlTitle: 'Office',
    icon: 'icon-laptop',
    class: ''
  },
  {
    path: '/tel',
    title: 'postes téléphoniques',
    rtlTitle: 'Phones',
    icon: 'icon-mobile',
    class: ''
  },
  {
    path: '/etude',
    title: 'études',
    rtlTitle: 'Studies',
    icon: 'icon-paper',
    class: ''
  }
];

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  menuItems: any[];

  constructor(private router:Router) {
  }

  ngOnInit() {
    this.menuItems = ROUTES.filter(menuItem => menuItem);
  }

  isMobileMenu() {
    if (window.innerWidth > 991) {
      return false;
    }
    return true;
  }

  index(){
    this.router.navigate(['']);
  }

}
