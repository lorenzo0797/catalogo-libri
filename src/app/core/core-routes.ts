import { Routes } from '@angular/router';

export const coreRoutes: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    {
        path: 'home',
        title: 'Home',
        loadComponent: () => import('../common/components/home/home').then(m => m.Home),
    },
    {
        path: 'libri',
        title: 'Libri',
        loadChildren: () => import('./libri/libri-routes').then(m => m.libriRoutes)
    }
];