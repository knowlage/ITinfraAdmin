import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule} from '@angular/common/http';
import { NgxPaginationModule } from 'ngx-pagination';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { CKEditorModule } from '@ckeditor/ckeditor5-angular';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './pages/header/header.component';
import { SidebarComponent } from './pages/sidebar/sidebar.component';
import { NewsComponent } from './pages/news/news.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { LoginlayoutComponent } from './loginlayout/loginlayout.component';
import { DashboardlayoutComponent } from './dashboardlayout/dashboardlayout.component';
import { LoginComponent } from './pages/login/login.component';
import { NewsEditeComponent } from './pages/news-edite/news-edite.component';
import { NewsSearchPipe } from './pages/news/newsSearchPipe';
import { DownloadComponent } from './pages/download/download.component';
import { FaqsComponent } from './pages/faqs/faqs.component';
import { FaqsEditeComponent } from './pages/faqs-edite/faqs-edite.component';
import { FaqsSearchPipe } from './pages/faqs/faqsSearchPipe';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SidebarComponent,
    NewsComponent,
    DashboardComponent,
    LoginlayoutComponent,
    DashboardlayoutComponent,
    LoginComponent,
    NewsEditeComponent,
    NewsSearchPipe,
    DownloadComponent,
    FaqsComponent,
    FaqsEditeComponent,
    FaqsSearchPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgxPaginationModule,
    ReactiveFormsModule,
    CKEditorModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
