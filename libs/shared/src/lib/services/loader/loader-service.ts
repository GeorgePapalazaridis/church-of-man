import { Injectable } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LoaderService {
  isLoading = new Subject<boolean>();

  sideBarItems: MenuItem[] = [
    {
      icon: 'pi pi-home',
      routerLink: 'home',
      label: 'Home',
      visible: true,
    },
    {
      icon: 'pi pi-fw pi-comment',
      routerLink: 'contact-form',
      label: 'Contact Form',
      visible: true,
    },
  ];

  show() {
    this.isLoading.next(true);
  }

  hide() {
    this.isLoading.next(false);
  }
}
