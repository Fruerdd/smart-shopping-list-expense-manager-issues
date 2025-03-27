import { Routes } from '@angular/router';
import { ServerRoute, RenderMode } from '@angular/ssr';

 export const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { 
    path: 'home', 
    loadComponent: () => import('./features/home/home.component')
      .then(m => m.HomeComponent)
  },
  {
    path: 'dashboard', 
    loadComponent: () => import('./features/dashboard/dashboard.component')
      .then(m => m.DashboardComponent)
  },
  {
    path: 'user-profile',
    loadComponent: () => import('./features/user-profile/user-profile.component')
      .then(m => m.UserProfileComponent)
  },
  { path: '**', redirectTo: '/home' }
];

 export const serverRoutes: ServerRoute[] = routes
  .filter((route): route is ServerRoute => route.path !== undefined)
  .map(route => ({
    ...route,
    renderMode: RenderMode.Server
  }));
