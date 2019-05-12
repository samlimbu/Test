import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login';
import { AuthGuard } from './core/auth.guard';
import { MainComponent } from './main/main.component';

const routes: Routes = [
    {
        path: '',
        redirectTo: 'login',
        pathMatch: 'full',
    },
    {
        path: '',
        component: MainComponent,
        children: [
            {
                path: 'home',
                canActivate: [AuthGuard],
                loadChildren: './feature-modules/home/home.module#HomeModule'
            }
        ]
    },
    {
        path: 'login',
        component: LoginComponent
    }
    ,
    {
        path: '**',
        redirectTo: 'dashboard',
        pathMatch: 'full',
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
