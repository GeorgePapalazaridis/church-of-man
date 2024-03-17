import { importProvidersFrom } from '@angular/core';
import { Route } from '@angular/router';
import { MarkdownModule } from 'ngx-markdown';
import { PagesComponent } from './pages.component';
import { UnderConstractionComponent } from './under-constraction/src';
import { ContactFormComponent } from './contact-form/src';

export const PagesRoutes: Route[] = [
  {
    path: '',
    component: PagesComponent,
    providers: [importProvidersFrom(MarkdownModule.forRoot())],
    children: [
      {
        path: 'home',
        component: UnderConstractionComponent,
        providers: [importProvidersFrom(MarkdownModule.forRoot())],
      },
      {
        path: 'contact-form',
        component: ContactFormComponent,
        providers: [importProvidersFrom(MarkdownModule.forRoot())],
      },
      {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full',
      },
    ],
  },
];
