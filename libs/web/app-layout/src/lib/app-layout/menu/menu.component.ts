/* eslint-disable @typescript-eslint/no-explicit-any */
import { CommonModule } from '@angular/common';
import {
  ChangeDetectionStrategy,
  OnInit,
  ViewEncapsulation,
} from '@angular/core';
import { Component } from '@angular/core';
import { LayoutService } from '@church-of-man/shared';
import { RouterModule } from '@angular/router';
import { MenuitemComponent } from './menu-item.component';

@Component({
  standalone: true,
  imports: [CommonModule, RouterModule, MenuitemComponent],
  selector: 'church-of-man-menu',
  templateUrl: './menu.component.html',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MenuComponent implements OnInit {
  model: any[] = [];

  constructor(public layoutService: LayoutService) {}

  ngOnInit() {
    this.model = [
      {
        label: 'Home',
        items: [
          { label: 'Dashboard', icon: 'pi pi-fw pi-home', routerLink: ['/'] },
        ],
      },
      // {
      //   label: 'UI Components',
      //   items: [
      //     {
      //       label: 'Tenants',
      //       icon: 'pi pi-fw pi-tablet',
      //      routerLink: ['/tenants'],
      //     },
      //     {
      //       label: 'Tenant NEW!',
      //       icon: 'pi pi-fw pi-id-card',
      //       routerLink: ['/tenant-new'],
      //     },
      //     {
      //       label: 'Media',
      //       icon: 'pi pi-fw pi-image',
      //       routerLink: ['/uikit/media'],
      //     },
      //     {
      //       label: 'Message',
      //       icon: 'pi pi-fw pi-comment',
      //       routerLink: ['/uikit/message'],
      //     },
      //     {
      //       label: 'Chart',
      //       icon: 'pi pi-fw pi-chart-bar',
      //       routerLink: ['/uikit/charts'],
      //     },
      //   ],
      // },
      // {
      //   label: 'Pages',
      //   icon: 'pi pi-fw pi-briefcase',
      //   items: [
      //     {
      //       label: 'Auth',
      //       icon: 'pi pi-fw pi-user',
      //       items: [
      //         {
      //           label: 'Login',
      //           icon: 'pi pi-fw pi-sign-in',
      //           routerLink: ['/auth/login'],
      //         },
      //         {
      //           label: 'Error',
      //           icon: 'pi pi-fw pi-times-circle',
      //           routerLink: ['/auth/error'],
      //         },
      //         {
      //           label: 'Access Denied',
      //           icon: 'pi pi-fw pi-lock',
      //           routerLink: ['/auth/access'],
      //         },
      //       ],
      //     },
      //     {
      //       label: 'Crud',
      //       icon: 'pi pi-fw pi-pencil',
      //       routerLink: ['/pages/crud'],
      //     },
      //     {
      //       label: 'Timeline',
      //       icon: 'pi pi-fw pi-calendar',
      //       routerLink: ['/pages/timeline'],
      //     },
      //   ],
      // },
      // {
      //   label: 'Get Started',
      //   items: [
      //     {
      //       label: 'Documentation',
      //       icon: 'pi pi-fw pi-question',
      //       routerLink: ['/documentation'],
      //     },
      //     {
      //       label: 'View Source',
      //       icon: 'pi pi-fw pi-search',
      //       url: ['https://github.com/primefaces/sakai-ng'],
      //       target: '_blank',
      //     },
      //   ],
      // },
    ];
  }
}
