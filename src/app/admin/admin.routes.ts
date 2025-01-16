import { Routes } from "@angular/router";
import { AdminComponent } from "./admin.component";


export const routes:Routes = [
    {
        path: '',
        component:AdminComponent,
        pathMatch:'prefix',
        children:[
            { path:'', pathMatch:'full', redirectTo:'dashboard'},
            {
                path: 'dashboard',
                loadComponent: () =>import('./dashboard/dashboard.component').then(m => m.DashboardComponent)
            },
            {
                path: 'settings',
                loadComponent: () =>import('./settings/settings.component').then(m => m.SettingsComponent)
            },
        ]
    }
]