import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: '',
        loadComponent: () =>import('./public/public.components').then(m => m.PublicComponent),
        children:[
            {
                path: '',
                pathMatch:'full',
                loadComponent: () =>import('./public/home/home.component').then(m => m.HomeComponent)
            },
        ]
    },
    {
        path: 'auth',
        loadComponent: () => import('./auth/auth.component').then(m => m.AuthComponent),
        children:[
            {
                path: 'signin',
                loadComponent: () =>import('./auth/signin/signin.component').then(m => m.SigninComponent)
            },
            {
                path: 'signup',
                loadComponent: () =>import('./auth/signup/signup.component').then(m => m.SignupComponent)
            },
            {
                path:'',pathMatch:'full', redirectTo:'signin'
            }
        ]
    },
    {
        path: 'admin',
        loadComponent: () => import('./admin/admin.component').then(m => m.AdminComponent),
        children:[
            {
                path: 'dashboard',
                loadComponent: () =>import('./admin/dashboard/dashboard.component').then(m => m.DashboardComponent)
            },
            {
                path: 'settings',
                loadComponent: () =>import('./admin/settings/settings.component').then(m => m.SettingsComponent)
            },
            {
                path:'',pathMatch:'full', redirectTo:'dashboard'
            }
        ]
    },
    {
        path:"**",redirectTo:''
    }
];
