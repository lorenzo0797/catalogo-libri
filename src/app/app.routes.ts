import { Routes } from '@angular/router';
import { BaseMenuService } from './services/abstracts/base-menu/base-menu-service';
import { MenuService } from './services/menu/menu-service';

export const routes: Routes = [
    {
        path: '',
        title: 'Catalogo Open Library',
        providers: [
            { provide: BaseMenuService, useClass: MenuService }
        ],
        loadComponent: () => import('./common/components/shell-page/shell-page').then(m => m.ShellPage),
        loadChildren: () => import('./core/core-routes').then(m => m.coreRoutes)
    }
];
