import { ApplicationConfig } from '@angular/core';
import {
  provideRouter,
  withEnabledBlockingInitialNavigation,
} from '@angular/router';
import { Routes } from '@angular/router';
import { AppLayoutComponent } from '@church-of-man/web/app-layout';
import {
  provideHttpClient,
  withInterceptorsFromDi,
} from '@angular/common/http';
import { importProvidersFrom } from '@angular/core';
import {
  BrowserAnimationsModule,
  provideAnimations,
} from '@angular/platform-browser/animations';
import { MessageService } from 'primeng/api';

export const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('@church-of-man/web/components/under-constraction').then(
        (m) => m.underConstractionRoutes
      ),
  },
  {
    path: '',
    component: AppLayoutComponent,
    children: [
      // {
      //   path: '',
      //   loadChildren: () =>
      //     import('@church-of-man/web/home').then((m) => m.homeRoutes),
      // },
    ],
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: '**',
    redirectTo: 'home',
  },
];

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes, withEnabledBlockingInitialNavigation()),
    provideAnimations(),
    provideHttpClient(withInterceptorsFromDi()),
    importProvidersFrom(BrowserAnimationsModule),
    MessageService,
  ],
};
