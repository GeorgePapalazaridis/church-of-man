import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AppLayoutComponent } from '@church-of-man/web/app-layout';
import { PrimeNGConfig } from 'primeng/api';

@Component({
  standalone: true,
  imports: [CommonModule, RouterModule, AppLayoutComponent],
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
