import { Routes } from '@angular/router';
import { AuthGuard } from './core/guards/auth.guard';
import { AuthenticatedGuard } from './core/guards/authenticated.guard';
import { RoleGuard } from './core/guards/role.guard';

export const routes: Routes = [
    {
        path: '',
        loadComponent: () => import('./business/home/home.component')
    },
    {
        path: 'user',
        loadComponent: () => import('./shared/components/layout/layout.component'),
        children: [
            {
                path: '',
                redirectTo: 'login',
                pathMatch: 'full'
            },
            {
                path: 'dashboard',
                loadComponent: () => import('./business/dashboard/dashboard.component'),
                canActivate: [AuthGuard, RoleGuard],
                data: { expectedRoles: ['ROLE_ADMIN'] } 
            },
            {
                path: 'profile',
                loadComponent: () => import('./business/profile/profile.component'),
                canActivate: [AuthGuard, RoleGuard],
                data: { expectedRoles: ['ROLE_USER', 'ROLE_ADMIN'] } 
            },
            {
                path: 'tables',
                loadComponent: () => import('./business/tables/tables.component'),
                canActivate: [AuthGuard, RoleGuard],
                data: { expectedRoles: ['ROLE_ADMIN'] }
            }
        ]
    },
    {
        path: 'login',
        loadComponent: () => import('./business/authentication/login/login.component'),
        canActivate: [AuthenticatedGuard]
    },
    {
        path: 'register',
        loadComponent: () => import('./business/authentication/register/register.component')
    },
    {
        path: 'unauthorized',
        loadComponent: () => import('./shared/components/unauthorized/unauthorized.component') 
    },
    {
        path: '**',
        loadComponent: () => import('./shared/components/not-found/not-found.component')
    }
];
