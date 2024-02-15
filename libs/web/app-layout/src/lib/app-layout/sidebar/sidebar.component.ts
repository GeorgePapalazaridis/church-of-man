import {
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  ViewEncapsulation,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutService } from '@church-of-man/shared';
import { PanelMenuModule } from 'primeng/panelmenu';
import { SidebarModule } from 'primeng/sidebar';
import { RouterModule } from '@angular/router';
import { MenuComponent } from '../menu/menu.component';

@Component({
  selector: 'church-of-man-sidebar',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    PanelMenuModule,
    SidebarModule,
    MenuComponent,
  ],
  templateUrl: './sidebar.component.html',
  styleUrl: '../app-layout.component.scss',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [LayoutService],
})
export class SidebarComponent {
  constructor(public layoutService: LayoutService, public el: ElementRef) {}
}
