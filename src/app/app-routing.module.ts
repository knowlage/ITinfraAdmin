import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './auth.guard';

import { DashboardlayoutComponent } from './dashboardlayout/dashboardlayout.component';
import { LoginlayoutComponent } from './loginlayout/loginlayout.component';

import {DashboardComponent} from './pages/dashboard/dashboard.component';
import {NewsComponent} from './pages/news/news.component';
import { LoginComponent } from './pages/login/login.component';
import { NewsEditeComponent} from './pages/news-edite/news-edite.component';


const routes: Routes = [
  {path:'', redirectTo:'/dashboard', pathMatch:'full'},
  {
    path:'dashboard',
    component: DashboardlayoutComponent,
    canActivate:[AuthGuard],
    children: [
      {path:'', component:DashboardComponent},
      {path:'news', component: NewsComponent},
      {path:'news/edit', component: NewsEditeComponent}
    ]
  },
  {
    path:'login',
    component: LoginlayoutComponent,
    children: [
      {path:'', component:LoginComponent}
    ]
  }  
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
