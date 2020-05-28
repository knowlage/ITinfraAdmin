import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './auth.guard';

import { DashboardlayoutComponent } from './dashboardlayout/dashboardlayout.component';
import { LoginlayoutComponent } from './loginlayout/loginlayout.component';

import {DashboardComponent} from './pages/dashboard/dashboard.component';
import {NewsComponent} from './pages/news/news.component';
import { LoginComponent } from './pages/login/login.component';
import { NewsEditeComponent} from './pages/news-edite/news-edite.component';
import { DownloadComponent } from './pages/download/download.component';
import { FaqsComponent } from './pages/faqs/faqs.component';
import { FaqsEditeComponent } from './pages/faqs-edite/faqs-edite.component';
import { UploadComponent } from './pages/upload/upload.component';
import { DownloadEditeComponent } from './pages/download-edite/download-edite.component';


const routes: Routes = [
  {path:'', redirectTo:'/dashboard', pathMatch:'full'},
  {
    path:'dashboard',
    component: DashboardlayoutComponent,
    canActivate:[AuthGuard],
    children: [
      {path:'', component:DashboardComponent},
      {path:'news', component: NewsComponent},
      {path:'news/edit', component: NewsEditeComponent},
      {path:'download', component: DownloadComponent},
      {path:'faqs', component: FaqsComponent},
      {path:'faqs/edit', component: FaqsEditeComponent},
      {path:'upload', component: UploadComponent},
      {path:'download/edit', component: DownloadEditeComponent}
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
