import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { PrimeNGConfig } from 'primeng/api';
import { HeaderComponent } from '@church-of-man/web/app-layout';
import { SidebarComponent } from '@church-of-man/web/app-layout';

@Component({
  standalone: true,
  imports: [CommonModule, RouterModule, HeaderComponent, SidebarComponent],
  selector: 'church-of-man-root',
  template: '<router-outlet></router-outlet>',
})
export class AppComponent implements OnInit {
  expanded = false;

  constructor(private primengConfig: PrimeNGConfig) {}

  ngOnInit() {
    this.primengConfig.ripple = true;
  }
}
