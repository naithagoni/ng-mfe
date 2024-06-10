import { Route } from '@angular/router';
import { loadRemoteModule } from '@nx/angular/mf';
import { authGuard } from './core/guards/auth.guard';

export const appRoutes: Route[] = [
  {
    path: 'todo',
    loadChildren: () =>
      loadRemoteModule('todo', './Routes').then((m) => m.remoteRoutes),
    canActivate: [authGuard],
  },
  {
    path: 'login',
    loadChildren: () =>
      loadRemoteModule('login', './Routes').then((m) => m.remoteRoutes),
  },
  {
    path: 'home',
    loadComponent: () =>
      import('./components/home.component').then((m) => m.HomeComponent),
    canActivate: [authGuard],
  },
];
