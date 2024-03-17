import { CommonModule } from '@angular/common';
import { Component, ChangeDetectionStrategy } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AppLayoutComponent } from '../app-layout/src/lib/app-layout/app-layout.component';




@Component({
    standalone: true,
    selector: 'church-of-man-pages',
    template: `<church-of-man-app-layout>
        <router-outlet></router-outlet>
    </church-of-man-app-layout>`,
    changeDetection: ChangeDetectionStrategy.OnPush,
    imports: [CommonModule, RouterModule, AppLayoutComponent]
})
export class PagesComponent {}
