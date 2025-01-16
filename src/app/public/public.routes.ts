import { Routes } from "@angular/router";
import { PublicComponent } from "./public.components";
export const routes:Routes = [
    {
        path: '',
        component:PublicComponent,
        pathMatch:'prefix',
        children:[
            {
                path: '',
                pathMatch:'full',
                loadComponent: () =>import('./home/home.component').then(m => m.HomeComponent)
            }
        ]
    }
]