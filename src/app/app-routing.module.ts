import { Routes } from '@angular/router';
import { ServerRoute, RenderMode } from '@angular/ssr';

// Define your routes as usual
export const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { 
    path: 'home', 
    loadChildren: () => import('./features/home/home.module').then(m => m.HomeModule)
  },
  { path: '**', redirectTo: '/home' }
];

// Generate server-specific routes by filtering out invalid ones
export const serverRoutes: ServerRoute[] = routes
  .filter((route): route is ServerRoute => route.path !== undefined)
  .map(route => ({
    ...route,
    renderMode: RenderMode.Server
  }));
