import { AuthGuard } from './providers/auth.guard';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
    { path: '', loadChildren: './components/home/home.module#HomeModule', canActivate: [AuthGuard] },
    { path: 'login', loadChildren: './login/login.module#LoginModule' },
];

@NgModule({
    imports: [RouterModule.forRoot(routes, {useHash: true})],
    exports: [RouterModule]
})
export class AppRoutingModule { }
