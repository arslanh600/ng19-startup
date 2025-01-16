import { Routes } from '@angular/router';
import { AuthGuard } from './core/guards/auth.guard';

export const routes: Routes = [
    {
        path: '',
        loadChildren: () =>import('./public/public.routes').then(m => m.routes),
    },
    {
        path: 'auth',
        loadChildren: () => import('./auth/auth.routes').then(m => m.routes),
    },
    {
        path: 'admin',
        canActivateChild: [AuthGuard],
        loadChildren: () => import('./admin/admin.routes').then(m => m.routes),
    },
    {
        path:"**",redirectTo:''
    }
];
