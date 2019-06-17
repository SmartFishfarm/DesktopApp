import { LayoutComponent } from './layout.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      { path: '', redirectTo: 'dashboard', pathMatch: 'prefix' },
      { path: 'home', loadChildren: './home/home.module#HomeModule' },
    ]
  }
  { path: '', redirectTo: 'home', pathMatch: 'prefix' },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LayoutRoutingModule { }
