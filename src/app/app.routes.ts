import { Routes } from '@angular/router';

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
        loadChildren: () => import('./admin/admin.routes').then(m => m.routes),
    },
    {
        path:"**",redirectTo:''
    }
];
