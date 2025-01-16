import { Routes } from "@angular/router";
import { AuthComponent } from "./auth.component";
export const routes:Routes = [
    {
        path: '',
        component:AuthComponent,
        pathMatch:'prefix',
        children:[
            { path:'', pathMatch:'full', redirectTo:'signin'},
            {
                path: 'signin',
                loadComponent: () =>import('./signin/signin.component').then(m => m.SigninComponent)
            },
            {
                path: 'signup',
                loadComponent: () =>import('./signup/signup.component').then(m => m.SignupComponent)
            },
            
        ]
    }
]