import { Routes } from '@angular/router';
import { libroResolver } from './lista-libri/dettaglio-libro/resolver/libro-resolver';

export const libriRoutes: Routes = [
    {
        path: 'lista',
        title: 'Lista libri',
        loadComponent: () => import('./lista-libri/lista-libri').then(m => m.ListaLibri)
    },
    {
        path: 'dettaglio/:id/:idE',
        title: 'Dettaglio libro',
        loadComponent: () => import('./lista-libri/dettaglio-libro/dettaglio-libro').then(m => m.DettaglioLibro),
        resolve: {
            data: libroResolver
        }
    }
]