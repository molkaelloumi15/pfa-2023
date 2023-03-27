import {Component, OnInit} from '@angular/core';

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
    title: 'Dashboard',
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
    title: 'Department',
    rtlTitle: 'Department',
    icon: 'icon-badge',
    class: ''
  },
  {
    path: '/emp',
    title: 'Employées',
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
    title: 'Poste Téléphoniques',
    rtlTitle: 'Phones',
    icon: 'icon-mobile',
    class: ''
  },
  {
    path: '/etude',
    title: 'Etudes',
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

  constructor() {
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
}
