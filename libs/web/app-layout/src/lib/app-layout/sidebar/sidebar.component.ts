import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  ElementRef,
  ViewEncapsulation,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutService, LoaderService } from '@church-of-man/shared';
import { PanelMenuModule } from 'primeng/panelmenu';
import { SidebarModule } from 'primeng/sidebar';
import { Router, RouterModule } from '@angular/router';
import { MenuItem } from 'primeng/api';
import { cloneDeep } from 'lodash';

@Component({
  selector: 'church-of-man-sidebar',
  standalone: true,
  imports: [CommonModule, RouterModule, PanelMenuModule, SidebarModule],
  templateUrl: './sidebar.component.html',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [LayoutService],
})
export class SidebarComponent {
  items: MenuItem[];
  hide = true;
  itemsWithOnlyIcons: MenuItem[] = [];

  constructor(
    private _cd: ChangeDetectorRef,
    private _router: Router,
    private _loaderService: LoaderService,
    public layoutService: LayoutService,
    public el: ElementRef
  ) {
    this.items = cloneDeep(this._loaderService.sideBarItems);
  }

  public setItemsWithOnlyIcons() {
    this.itemsWithOnlyIcons = this.items.map((item) => {
      const finalItem = {
        icon: item.icon,
        visible: item.visible,
        routerLink: item.routerLink,
        title: item.title,
        items: item.items?.map((subItem) => {
          return {
            icon: subItem.icon,
            visible: subItem.visible,
            routerLink: subItem.routerLink,
            title: subItem.title,
          };
        }),
      };
      return finalItem;
    });
  }

  navigateHome() {
    this._router.navigate(['pages/home']);
  }
}
